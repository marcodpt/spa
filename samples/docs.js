window.updateRoute = () => {}

export default {
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
}
