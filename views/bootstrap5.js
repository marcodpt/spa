export default (h, text) => () => 
  h('div', {
    class: 'text-center mt-5',
    style: ''
  }, [
    h('div', {
      class: 'spinner-border',
      role: 'status',
      style: {
        width: '5rem',
        height: '5rem'
      }
    })
  ])
