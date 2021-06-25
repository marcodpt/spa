import {nav} from 'https://cdn.jsdelivr.net/gh/marcodpt/views/index.js'
import {h, app} from "https://unpkg.com/hyperapp"
import {
  createNanoEvents
} from 'https://cdn.jsdelivr.net/npm/nanoevents@6.0.0/index.js'

export default (e, params) => {
  const emitter = createNanoEvents()

  app({
    init: state.navbar,
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
        const unbind = emitter.on('update', current => {
          requestAnimationFrame(() => dispatch(state => ({
            ...state,
            model: {
              ...state.model,
              ...model
            }
          })))
        })
        return () => unbind()
      }
    ]]
  })

  return current => {
    emitter.emit('update', current)
  }
}
