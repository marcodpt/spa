window.updateRoute = () => {}

export default {
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
}
