import './index.css'

// eslint-disable-next-line react/prop-types
export const Button = ({ type, children }) => {
  return (
    <button type={type} className="button">{children}</button>
  )
}
