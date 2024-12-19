import './index.css'

import PropTypes from 'prop-types'

export const Account = ({ username, avatar, email }) => {
  const user = username?.charAt(0) || email?.[0]?.toUpperCase() || '';

  return (
    <div className="account">
      <span className="avatar">
        {avatar && <img src={avatar} alt={username} />}
        {!avatar && <span className='avatar-username'>{user}</span>}
      </span>
     {avatar && <p className="username">{username ? username : email}</p>}
    </div>
  )
}

Account.propTypes = {
  username: PropTypes.string,
  avatar: PropTypes.string,
  email: PropTypes.string
}