import './input.css'

// eslint-disable-next-line react/prop-types
export const Input = ({ type, value, onChange, name, placeholder, error, isError, isDisabled }) => {
  return (
    <>
      <input 
        className={`input ${error || isError ? 'error' : ''}`} 
        type={type} 
        value={value}
        name={name} 
        onChange={onChange} 
        placeholder={placeholder}
        disabled={isDisabled}
      />
      {error && <span className='error-span'>{error}</span>}
    </>
  )
}
