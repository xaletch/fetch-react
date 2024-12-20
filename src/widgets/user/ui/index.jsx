import PropTypes from 'prop-types'

import './index.css';

export const User = ({ children }) => {
  return (
    <div className='user__form'>
      <div className='user__form-wrapper'>
        {children}
      </div>
    </div>
  )
}

User.propTypes = {
  children: PropTypes.node.isRequired
}
