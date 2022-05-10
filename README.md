# spa
> A
[spa](https://en.wikipedia.org/wiki/Single-page_application)
[micro frontend](https://martinfowler.com/articles/micro-frontends.html)
[element](https://github.com/marcodpt/element/)
based on 
[router](https://github.com/marcodpt/router)

[Live demo](https://marcodpt.github.io/element/?url=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2Fmarcodpt%2Fspa%2Fsample.js)

## Usage
```js
import spa from 'https://cdn.jsdelivr.net/gh/marcodpt/spa/index.js'

window.updateRoute = () => {}

document.body = spa({
  routes: [
    {
      path: '/hi/:name',
      element: ({name}) => `<h1>Hello ${name}</h1>`
    }, {
      path: '*',
      element: () => `<button onclick="updateRoute('/hi/John')">Say hi!</button>`
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
   - function `element(params)`: an
[element](https://github.com/marcodpt/element/)
   - function `mount(params)`: an optional function that recieve the
`route` variables and returns a new version of params to be passed to `element`
function. If you don't pass `mount` function, it will mount element with the
`route` variables. 
