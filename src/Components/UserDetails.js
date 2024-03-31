import React from 'react'

export default function UserDetails() {
  const userdata=localStorage.getItem("gfg")
  const data = JSON.parse(userdata)
  return (
    <div >
      
    <div className='card1'>
      <h3>UserDetails are:-</h3>
      <br/>
      <h5>UserName:-{data.uname}</h5>
      <br/>
      <h5>Email:-{data.uemail}</h5>
      </div>
       

    </div>
  )
}
