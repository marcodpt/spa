import spa from './index.js'
import router from './samples/router.js'

export default {
  title: 'Spa Component',
  gh: 'https://github.com/marcodpt/spa',
  samples: {router},
  comp: spa,
  updates: {
    bear: '/animals/bear',
    notFound: '/this/is/not/a/route',
    home: '',
    soccer: '/sports/soccer',
    barcelona: '/sports/soccer?team=barcelona&country=spain',
    girl: '/girl',
    cuteGirl: '/girl?cute=true',
    dog: '/dog',
    pluto: '/dog?name=pluto',
  }
}
