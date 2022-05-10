import spa from './index.js'
import router from './samples/router.js'
import docs from './samples/docs.js'

export default {
  title: 'SPA',
  gh: 'https://github.com/marcodpt/spa',
  samples: {
    router: {
      attributes: router
    },
    docs: {
      attributes: docs
    }
  },
  element: spa
}
