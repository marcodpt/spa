export default {
  routes: [
    {
      route: '/:group/:item',
      module: './view.js'
    }, {
      route: '/:img',
      module: './view.js',
      mount: (params) => {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve({
              group: 'lazy',
              item: params.img
            })
          }, 3000)
        })
      }
    }
  ]
}
