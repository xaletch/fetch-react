import PropsTypes from 'prop-types'

import './index.css'

export const FormMessagesWrapper = ({ children }) => {
  return (
    <div className='form-messages'>{children}</div>
  )
}

FormMessagesWrapper.propTypes = {
  children: PropsTypes.node.isRequired
}