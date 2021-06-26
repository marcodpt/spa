import {nav} from 'https://cdn.jsdelivr.net/gh/marcodpt/views/index.js'
import {
  h, app
} from 'https://cdn.jsdelivr.net/npm/hyperapp@2.0.18/index.min.js'
import {
  createNanoEvents
} from 'https://cdn.jsdelivr.net/npm/nanoevents@6.0.0/index.js'

export default (e, params) => {
  const emitter = createNanoEvents()

  app({
    init: params,
    view: S =>
      h('div', {}, [
        nav(S),
        S.fixed ? nav({
          whiteText: S.whiteText,
          type: S.type,
          image: S.image,
          title: S.title,
          expand: 'xs'
        }) : null
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
            label: getLabel(state.items, url)
          })))
        })
        return () => unbind()
      }
    ]]
  })

  return url => {
    emitter.emit('change', url)
  }
}
