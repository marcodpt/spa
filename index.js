import {router} from 'https://cdn.jsdelivr.net/gh/marcodpt/router/index.js'
import {query} from 'https://cdn.jsdelivr.net/gh/marcodpt/query/index.js'
import navbar from './navbar.js'

export default (e, params) => {
  const main = e.innerHTML
  const nav = document.createElement('div')
  const app = document.createElement('div')
  const Modules = {}
  const Route = {
    path: null,
    update: null
  }
  const tick = () => {
    router(location.hash.substr(1))
  }
  const update = (ctx => {
    if (Route.update) {
      Route.update(query(ctx.query))
    }
  })

  e.innerHTML = ''
  e.appendChild(nav)
  e.appendChild(app)
  app.innerHTML = main

  navbar(nav, params.navbar)

  params.routes.forEach(route => {
    router(route.route, ctx => {
      if (Route.path != ctx.path) {
        app.innerHTML = main

        Promise.resolve().then(() => {
          return Modules[route.module] || import(route.module)
        }).then(module => {
          Modules[route.module] = module
          route.navbar ? nav.removeAttribute('style') :
            nav.setAttribute('style', 'display: none')
          module.default(app, ctx.params)
          update(ctx)
        })
      } else {
        update(ctx)
      }
    })
  })
  router('*', ctx => {
    window.location.hash = '#'
    app.innerHTML = main
  })

  window.addEventListener('hashchange', tick)
  window.addEventListener('load', tick)
}
