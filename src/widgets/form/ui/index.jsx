import './index.css'

// eslint-disable-next-line react/prop-types
export const Form = ({ title, children }) => {
  return (
    <div className='form-wrapper'>
      <div className='form-content'>
        <h1 className='form-title'>{title}</h1>
        {children}
      </div>
    </div>
  )
}
