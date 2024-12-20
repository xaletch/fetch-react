import PropsType from 'prop-types'

import { Input } from '../../../shared/ui'
import './index.css'

export const UserFormContent = ({ children, data, setData }) => {

  const onChange = (e) => {
    const { name, value } = e.target;

    setData({...data, [name]: value});
  }

  return (
    <div className='user__form-inputs'>
      <Input type={'text'} value={data?.username || ''} onChange={(e) => onChange(e)} name="username" placeholder={'username'} />
      <Input type={'text'} value={data?.last_name || ''} onChange={(e) => onChange(e)} name="last_name" placeholder={'last name'} />
      <Input type={'text'} value={data?.first_name || ''} onChange={(e) => onChange(e)} name="first_name" placeholder={'first name'} />
      <Input type={'email'} value={data?.email || ''} onChange={(e) => onChange(e)} name="email" placeholder={'Email'} isDisabled={true} />

      {children}
    </div>
  )
}

UserFormContent.propTypes = {
  children: PropsType.any.isRequired,
  data: PropsType.any,
  setData: PropsType.any
}