import {router, q} from './dependencies.js'
import view from './views/bootstrap5.js'

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
    if (typeof child == "object") {
      e.innerHTML = ''
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
      if (Route.path != path) {
        Route.path = path
        Route.update = () => {}

        if (!mount) {
          render(element({
            ...params,
            update: updater
          }))
          Route.update(query)
        } else {
          render(view(config))

          Promise.resolve()
            .then(() => mount(params))
            .then(params => {
              render(element({
                ...params,
                update: updater
              }))
              Route.update(query)
            })
        }
      } else {
        Route.update(query)
      }
    })
  })
  
  router(url)
  update(url => {router(url)})

  return e
})
