import PropTypes from 'prop-types'

export const Providers = ({ children }) => {
  return (
    <>
      {children}
    </>
  )
}

Providers.propTypes = {
  children: PropTypes.node.isRequired
}