import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { funSignUp } from '../Redux/Action'
import { useNavigate } from 'react-router-dom'

export const SignUp = () => {
  let [name, setName] = useState("")
  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")
  let [msg, setMsg] = useState("")
  let dispatch = useDispatch();
  let storeData = useSelector((store) => store)
  let navi = useNavigate();
  const handleSignup = (e) => {
    e.preventDefault();
    let obj = { name: name, email: email, password: password }
    dispatch(funSignUp(obj))

  }
  useEffect(() => {
    setMsg(storeData.Message)
    if (storeData.isLogin)
      navi("/")
  }, [handleSignup])
  return (
    <div>
      <form onSubmit={handleSignup}>
      {msg}
        <div className='col-md-10 mx-auto'>
          <div className='col-md-6'>
            <div className='mb-2 '>
              <input type='text' required className='form-control' placeholder='Your Name'
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
            <div className='mb-2'>
              <input type='email' required className='form-control' placeholder='Email Address'
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <div className='mb-2'>
              <input type='password' required className='form-control' placeholder='Your Password'
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
            <div className='mb-2'>
              <button type='submit' className='btn btn-primary' >Sign Up</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
