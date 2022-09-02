import React from 'react'
import './user-info.scss'

const UserInfo = ({user}) => {
  return (
    <div className='user-info'>
        <div className='user-info__img'>
            <img src={user.img} alt="" />
        </div>
        <div className='user-info_name'>
            <samp>{user.name}</samp>
        </div>
    </div>
  )
}

export default UserInfo