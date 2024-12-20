import PropTypes from 'prop-types';

import './index.css'

export const Wrapper = ({ children }) => {
  return (
    <div className="wrapper">{children}</div>
  )
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired
}