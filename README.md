# spa
> A
[spa](https://en.wikipedia.org/wiki/Single-page_application)
[micro frontend](https://martinfowler.com/articles/micro-frontends.html)
element based on [router](https://github.com/marcodpt/router)

[Live demo](https://marcodpt.github.io/h/?url=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2Fmarcodpt%2Fspa%2Fsamples.js)

## Usage
```js
import spa from 'https://cdn.jsdelivr.net/gh/marcodpt/spa/index.js'

window.updateRoute = () => {}

document.body = spa({
  routes: [
    {
      path: '/hi/:name',
      view: ({name}) => `<h1>Hello ${name}</h1>`
    }, {
      path: '*',
      view: () => `<button onclick="updateRoute('/hi/John')">Say hi!</button>`
    }
  ],
  update: callback => {window.updateRoute = callback}
})
```

## Params
 - string `url`: the default url when component mounted (default: '')
 - string `root`: the root DOM element of the spa (default: 'div')
 - function `update(callback)`: a required function to register
`callback`(`url`) every time `url` changes!
 - boolean `grow`: normal spinner or grow spinner?
(default: false => normal spinner)
 - number `size`: rem size of the spinner (default: 5)
 - string `color`: one of the bootstrap5 text colors ex: primary (default: '')
 - array `routes`: array of object with the possible routes, properties:
   - string `path`: an url with optional variables. ex: user/:id
   - function `view(params, extra)`: returns `DOM` node or `HTML` string or a
     promise for that.
     - object `params`: `path` declared variables
     - object `extra`:
       - string `query`: associate query string
       - function `update(listener(query))`: register an listener function in
         case query string change, if no listener is registered query string
         changes will refresh the route
