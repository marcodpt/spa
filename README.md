# spa
> A
[spa](https://en.wikipedia.org/wiki/Single-page_application)
[micro frontend](https://martinfowler.com/articles/micro-frontends.html)
[component](https://github.com/marcodpt/component/)
based on 
[router](https://github.com/marcodpt/router)

[Live demo](https://marcodpt.github.io/component/?url=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2Fmarcodpt%2Fspa%2Fsample.js)

## Usage
This [component](https://github.com/marcodpt/component/) will remount the 
`route` (with it child [component](https://github.com/marcodpt/component/))
every time the `url` `path` changes, using the defined routes. And will call
for `update` it child [component](https://github.com/marcodpt/component/) every
time only the `url` `query` changes.

## Params
 - string `view`: the default component view in case no route match
 - array `routes`: array of object with the possible routes, properties:
   - string `route`: an url with optional variables. ex: user/:id
   - function `comp(e, params)`: a
[component](https://github.com/marcodpt/component/)
   - function `mount(params)`: an optional function that recieve the `route`
variables and returns a new version of params to be passed to `comp` function.
If you don't pass `mount` function, it will mount component with the `route`
variables.
   - function `update(updater, query)`: an optional function that will change 
the default behavior when you call for a component update. In case you don'y
pass any function the query params will be used to update component. Otherwise
`updater` is the `comp` returned function and `query` is the query params, you
can do whatever you want!

## Update
 - string `url`: The actual url for this 
[component](https://github.com/marcodpt/component/)

