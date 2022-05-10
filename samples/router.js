import {html} from '../dependencies.js'

const nav = () => html(({
  ul, li, a
}) => ul({
  class: 'nav'
}, [
  {
    title: 'bear',
    href: '/animals/bear'
  }, {
    title: 'notFound',
    href: '/this/is/not/a/route'
  }, {
    title: 'home',
    href: ''
  }, {
    title: 'soccer',
    href: '/sports/soccer'
  }, {
    title: 'barcelona',
    href: '/sports/soccer?team=barcelona&country=spain'
  }, {
    title: 'girl',
    href: '/girl'
  }, {
    title: 'cuteGirl',
    href: '/girl?cute=true'
  }, {
    title: 'dog',
    href: '/dog'
  }, {
    title: 'pluto',
    href: '/dog?name=pluto'
  }
].map(({title, href}) =>
  li({
    class: 'nav-item'
  }, [
    a({
      class: 'nav-link',
      href: '#'+href
    }, title)
  ])
)))

const view = ({
  group,
  item,
  update
}) => html(({
  div, h5, p, img
}) => {
  const e = div({
    class: 'container'
  }, [
    nav(),
    div({
      class: 'card m-auto mt-5',
      style: {
        maxWidth: '400px'
      }
    }, [
      div({
        class: 'card-body'
      }, [
        h5({
          class: 'card-title'
        }, group+' '+item),
        p({
          class: 'card-text',
          style: {
            whiteSpace: 'pre-wrap'
          }
        })
      ]),
      img({
        class: 'card-img-bottom w-100',
        alt: item,
        src: 'https://source.unsplash.com/300x300/?'+item
      })
    ])
  ])

  update(query => {
    e.querySelector('.card-text').textContent =
      JSON.stringify(query, undefined, 2)
  })

  return e
})

const getUrl = () => location.hash.substr(1)
var update = () => {}

window.addEventListener('hashchange', () => {
  update(getUrl())
})

export default {
  url: getUrl(),
  grow: true,
  size: 3,
  color: 'primary',
  routes: [
    {
      path: '/:group/:item',
      element: view
    }, {
      path: '/:img',
      element: view,
      mount: ({img}) => new Promise(resolve => {
        setTimeout(() => {
          resolve({
            group: 'lazy',
            item: img
          })
        }, 3000)
      })
    }, {
      path: '*',
      element: () => html(({
        p, div
      }) => div({
        class: 'container'
      }, [
        nav(),
        p({
          class: 'lead'
        }, 'Choose one of the available routes!')
      ]))
    }
  ],
  update: callback => {
    update = callback
  }
}
