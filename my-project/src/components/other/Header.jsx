import React, { useState } from 'react'

const Header = ({props}) => {
  // const [username, setUsername] = useState('')
  // if(!data){
  //   setUsername('Admin')
  // }else{
  //   setUsername(data.firstname)
  // }

  const logOutUser = ()=>{
    localStorage.setItem('loggedInUser','')
    console.log(props.changeUser)
    // window.location.reload()

  }
  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>Hello <br /><span className='text-3xl font-semibold text-white'>username👋 </span> </h1>
      <button onClick={logOutUser} className='bg-red-600 text-base font-medium text-white px-3 py-2 rounded-2xl'>Log Out</button>
    </div>
  )

}

export default Header
