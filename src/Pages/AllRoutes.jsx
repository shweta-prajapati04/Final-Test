import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Login } from './Login'
import { SignUp } from './SignUp'
import { Home } from './Home'
import { Task } from './Task'

export const AllRoutes = () => {
  return (
    <div>
    <Routes>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<SignUp/>} />
    <Route path="/task" element={<Task/>} />

    <Route path="/" element={<Home/>}/>
    </Routes>
    </div>
  )
}
