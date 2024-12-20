import PropsType from 'prop-types'

import './index.css'

export const FormWrapper = ({ cl, handleSubmit, children }) => {
  return (
    <form className={cl} onSubmit={handleSubmit}>{children}</form>
  )
}

FormWrapper.propTypes = {
  cl: PropsType.string,
  handleSubmit: PropsType.func,
  children: PropsType.node.isRequired
}
