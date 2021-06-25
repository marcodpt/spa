export default {
  navbar: {
    type: 'primary',
    whiteText: true,
    fixed: 'top',
    expand: 'lg',
    title: 'Auto',
    home: '#',
    items: [
      {
        icon: 'tools',
        title: 'Ferramentas',
        access: ['master'],
        items: [
          {
            icon: 'project-diagram',
            title: 'Fluxograma Cliente',
            href: '#/graph/db'
          }, {
            icon: 'database',
            title: 'Fluxograma do Sistema',
            href: '#/graph/core'
          }, {
            icon: 'file',
            title: 'Exemplo de Gráfico',
            href: '#/chart/tables'
          }, {
            icon: 'file',
            title: 'Importar Arquivos',
            href: '#/upload/files'
          }
        ]
      },
      "gets/tables",
      "id/users",
      "login/users",
      "logout/users"
    ]
  },
  routes: [
    {
      route: '/api/:service/:table/:id',
      navbar: true,
      module: './schema.js'
    }, {
      route: '/api/:service/:table',
      navbar: true,
      module: './schema.js'
    }, {
      route: '/:name',
      navbar: true,
      module: './raw.js'
    }, {
      route: '/upload/files',
      navbar: true,
      module: './file2.js'
    }, {
      route: '/graph/:id',
      navbar: true,
      module: './graph2.js'
    }, {
      route: '/chart/:id',
      navbar: true,
      module: './chart2.js'
    }
  ]
}
