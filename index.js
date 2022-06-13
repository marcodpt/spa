import {router, q} from './dependencies.js'
import ui from './views/bootstrap5.js'

export default (({
  url = '',
  routes,
  update,
  root = 'div',
  ...config
}) => {
  const e = document.createElement(root)
  const Route = {}
  const updater = callback => {
    Route.update = qry => callback(q(qry))
  }
  const render = child => {
    e.innerHTML = ''
    if (typeof child == "object" && child != null) {
      e.appendChild(child)
    } else if (typeof child == "string") {
      e.innerHTML = child
    }
  }

  routes.forEach(({
    path,
    element,
    mount
  }) => {
    router(path, ({
      path,
      params,
      query
    }) => {
      const rerender = () => {
        if (!mount) {
          render(element({
            update: updater,
            query: query,
            ...params,
          }))
          if (typeof Route.update == "function") {
            Route.update(query)
          }
        } else {
          render(ui(config))

          Promise.resolve()
            .then(() => mount({
              update: updater,
              query: query,
              ...params
            }))
            .then(params => {
              render(element({
                update: updater,
                query: query,
                ...params
              }))
              if (typeof Route.update == "function") {
                Route.update(query)
              }
            })
        }
      }

      if (Route.path != path) {
        Route.path = path
        rerender()
      } else if (typeof Route.update == "function") {
        Route.update(query)
      } else {
        rerender()
      }
    })
  })
  
  router(url)
  update(url => {router(url)})

  return e
})
