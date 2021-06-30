import {
  component
} from 'https://cdn.jsdelivr.net/gh/marcodpt/component/index.js'

export default (e, params) => {
  component(e, (h, text) => ({group, item, query}) => 
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
    ])
  )
}
