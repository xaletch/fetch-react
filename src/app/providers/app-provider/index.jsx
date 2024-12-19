import PropTypes from 'prop-types'
import { AuthProvider } from '../auth-provider'

export const Providers = ({ children }) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}

Providers.propTypes = {
  children: PropTypes.node.isRequired
}