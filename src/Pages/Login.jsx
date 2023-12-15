import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { funSignin } from '../Redux/Action'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
    let [email, setEmail] = useState("")
    let [msg, setMsg] = useState("")
    let [password, setPassword] = useState("")
    let dispatch = useDispatch();
    let navi = useNavigate();
    let storeData = useSelector((store) => store)
    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(funSignin({ email, password }))

    }
    useEffect(() => {
        setMsg(storeData.Message)
        if (storeData.isLogin)
            navi("/")
    }, [handleLogin])
    return (
        <div>
            <form onSubmit={handleLogin}>
                {msg}
                <div className='col-md-10 mx-auto'>
                    <div className='col-md-7 mx-auto'>
                        <div className='mb-2 col-md-5'>
                            <input type='email' required className='form-control' placeholder='Email Address'
                                onChange={(e) => setEmail(e.target.value)}
                            ></input>
                        </div>
                        <div className='mb-2 col-md-5'>
                            <input type='password' required className='form-control' placeholder='Your Password'
                                onChange={(e) => setPassword(e.target.value)}
                            ></input>
                        </div>
                        <div className='mb-2  col-md-5'>
                            <button type='submit' className='btn btn-primary'  >Login</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
