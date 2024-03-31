import React, {  useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Registration() {
  const [formData, setFormData] = useState({})
  const navigate=useNavigate()
  const handleData = (e) => {
      setFormData({
          ...formData,
          [e.target.name]: e.target.value
      })
      console.log(formData);

  }
  const addUser = (e) => {
      e.preventDefault()
      const data = JSON.stringify(formData)
      localStorage.setItem('gfg', data)
      //localStorage.setItem('token', false)
      navigate('/login')
  }

  return (
      <div>

          
          <form onSubmit={addUser}>
            <div className='card'>
            <div className='card-body'>
              
                    <h4>Registration</h4>
                
              <input className="form-control form-control-lg" type='text' placeholder='Enter Username' name='uname' required
                  onChange={handleData}/>
                  <br/>
              <input className="form-control form-control-lg"type='email' placeholder='Enter Email' name='uemail' required
                  onChange={handleData}/>
                  <br/>
              <button  className="btn btn-primary"> Register</button>
              </div>
              </div>
          </form>
      </div>
  );
}
