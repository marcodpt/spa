import component from
  'https://cdn.jsdelivr.net/gh/marcodpt/component@0.0.1/index.js'

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
    <div class="container">
      <p class="lead">Choose one of the available routes!</p>
    </div>
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
    }, {
      route: '',
      comp: view,
      mount: (params, update) => {
        update({
          width: '0%',
          label: '0 of 10'
        })
        var n = 0
        return new Promise(resolve => {
          const wait = () => {
            if (n > 10) {
              resolve({
                group: 'launch',
                item: 'rocket'
              })
            } else {
              setTimeout(() => {
                n += 1
                update({
                  width: `${n*10}%`,
                  label: `${n} of 10`
                })
                wait()
              }, 1000)
            }
          }
          wait()
        })
      }
    }
  ]
}
