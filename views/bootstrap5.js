export default (h, text) => ({
  bg,
  striped,
  animated,
  width,
  label
}) => width == null ?
  h('div', {
    class: 'text-center mt-5 pt-5'
  }, [
    h('div', {
      class: 'spinner-border',
      role: 'status',
      style: {
        width: '5rem',
        height: '5rem'
      }
    })
  ]) : 
  h('div', {
    class: 'container text-center mt-5 pt-5'
  }, [
    h('div', {
      class: 'progress'
    }, [
      h('div', {
        class: [
          'progress-bar',
          striped ? 'progress-bar-striped' : null,
          animated ? 'progress-bar-animated' : null,
          bg ? 'bg-'+bg : null
        ],
        style: {
          width: width
        }
      }, label ? text(label) : null)
    ])
  ])
