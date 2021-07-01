import {
  component
} from 'https://cdn.jsdelivr.net/gh/marcodpt/component/index.js'

const view = (e, params) => {
  return component(e, (h, text) => ({group, item, query}) => 
    h('div', {
      class: "card m-auto mt-5",
      style: {
        maxWidth: '400px'
      }
    }, [
      h('div', {
        class: "card-body"
      }, [
        h('h5', {
          class: 'card-title'
        }, text(group+' '+item)),
        h('p', {
          class: 'card-text',
          style: {
            whiteSpace: 'pre-wrap'
          }
        }, text(JSON.stringify(query, undefined, 2)))
      ]),
      h('img', {
        class: "card-img-bottom w-100",
        alt: item,
        src: "https://source.unsplash.com/300x300/?"+item
      })
    ])
  , params, (state, query) => ({
    ...state,
    query: query
  }))
}

export default {
  view: `
    <h1>Hello Router!</h1>
  `,
  routes: [
    {
      route: '/:group/:item',
      comp: view
    }, {
      route: '/:img',
      comp: view,
      mount: (params) => {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve({
              group: 'lazy',
              item: params.img
            })
          }, 3000)
        })
      },
      update: (updater, query) => {
        updater({
          ...query,
          pi: 3.14
        })
      }
    }
  ]
}
