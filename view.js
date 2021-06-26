import {
  h, text, app
} from 'https://cdn.jsdelivr.net/npm/hyperapp@2.0.18/index.min.js'
import {
  createNanoEvents
} from 'https://cdn.jsdelivr.net/npm/nanoevents@6.0.0/index.js'

export default (e, params) => {
  const emitter = createNanoEvents()

  app({
    init: {
      ...params,
      query: params.query || {}
    },
    view: ({group, item, query}) =>
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
          }, text(JSON.stringify(query, undefined, 2))),
          h('a', {
            class: 'btn btn-'+(query.q == null ? 'primary' : 'secondary'),
            href: location.hash.split('?')+(query.q == null ? '?q=test' : '')
          }, text(query.q == null ? 'Set query' : 'Clear query'))
        ]),
        h('img', {
          class: "card-img-bottom w-100",
          alt: item,
          src: "https://source.unsplash.com/300x300/?"+item
        })
      ]),
    node: e,
    subscriptions: () => [[
      dispatch => {
        const getLabel = (items, url) => {
          var label = ''
          (items || []).forEach(item => {
            if (item.href) {
              if (!label && item.href == url.substr(0, item.href.length)) {
                label = item.title
              }
            }
            if (!label) {
              label = getLabel(item.items, url)
            }
          })
          return label
        }

        const unbind = emitter.on('change', url => {
          requestAnimationFrame(() => dispatch(state => ({
            ...state,
            label: getLabel(state.items)
          })))
        })
        return () => unbind()
      }
    ]]
  })

  return query => {
    emitter.emit('change', query)
  }
}
