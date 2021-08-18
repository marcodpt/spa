import router from 'https://cdn.jsdelivr.net/gh/marcodpt/router@0.0.1/index.js'
import query from 'https://cdn.jsdelivr.net/gh/marcodpt/query@0.0.2/index.js'
import component from 
  'https://cdn.jsdelivr.net/gh/marcodpt/component@0.0.1/index.js'
import loading from './views/bootstrap5.js'

export default (e, params) => {
  const node = e.cloneNode(false)
  const Route = {}
  const getEl = () => {
    const el = node.cloneNode(false)
    e.replaceWith(el)
    e = el
    return e
  }
  const home = () => {
    Route.path = null
    Route.update = null
    getEl().innerHTML = params.view
  }

  params.routes.forEach(route => {
    if (route.mount == null) {
      route.mount = params => params
    }
    if (route.update == null) {
      route.update = (updater, query) => updater(query)
    }
    router(route.route, ctx => {
      if (Route.path != ctx.path) {
        Route.path = ctx.path
        Route.update = null
        const f = component(getEl(), loading, {}, (state, data) => ({
          ...data
        }))

        Promise.resolve().then(() => {
          return route.mount(ctx.params, f)
        }).then(params => {
          if (Route.path == ctx.path) {
            const u = route.comp(getEl(), params)
            if (u) {
              setTimeout(() => {
                Route.update = (ctx) => {
                  route.update(u, query(ctx.query))
                }
                Route.update(ctx)
              }, 50)
            }
          }
        })
      } else if (Route.update) {
        Route.update(ctx)
      }
    })
  })
  router('*', home)
  home()

  return url => router(url)
}
