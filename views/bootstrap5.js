import {html} from '../dependencies.js'

export default ({
  color = '',
  size = 5,
  grow = false
}) => html(({
  div
}) => div({
  class: 'text-center mt-5 pt-5'
}, [
  div({
    class: [
      'spinner-'+(grow ? 'grow' : 'border'),
      color ? 'text-'+color : ''
    ],
    role: 'status',
    style: {
      width: size+'rem',
      height: size+'rem'
    }
  })
]))
  
