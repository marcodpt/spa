export default {
  navbar: {
    type: 'dark',
    whiteText: true,
    fixed: 'top',
    expand: 'lg',
    title: 'Auto',
    home: '#',
    items: [
      {
        icon: 'paw',
        title: 'Animals',
        items: [
          {
            icon: 'hippo',
            title: 'Hippo',
            href: '#/animals/hippo'
          }, {
            icon: 'dog',
            title: 'Dog',
            href: '#/animals/dog'
          }, {
            icon: 'horse',
            title: 'Horse',
            href: '#/animals/horse'
          }, {
            icon: 'fish',
            title: 'Fish',
            href: '#/animals/fish'
          }, {
            icon: 'cat',
            title: 'Cat',
            href: '#/animals/cat'
          }
        ]
      }, {
        icon: 'dumbbell',
        title: 'Sports',
        items: [
          {
            icon: 'volleyball-ball',
            title: 'Volleyball',
            href: '#/sports/volleyball'
          }, {
            icon: 'running',
            title: 'Running',
            href: '#/sports/running'
          }, {
            icon: 'futbol',
            title: 'Futbal',
            href: '#/sports/futbol'
          }, {
            icon: 'basketball-ball',
            title: 'Basketball',
            href: '#/sports/basketball'
          }, {
            icon: 'swimmer',
            title: 'Swim',
            href: '#/sports/swim'
          }, {
            icon: 'biking',
            title: 'Cycling',
            href: '#/sports/cycling'
          }
        ]
      }
    ]
  },
  routes: [
    {
      route: '/:group/:item',
      navbar: true,
      module: './view.js'
    }
  ]
}
