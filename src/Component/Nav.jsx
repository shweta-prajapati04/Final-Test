import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { funLogout } from '../Redux/Action'

export const Nav = () => {
  let data = useSelector((store) => store)
  let[isLogin,setisLogin]=useState(false)
  let dispatch = useDispatch();
  let navi=useNavigate()
 console.log(data.user.name)
  const handleLogout = () => {
    dispatch(funLogout());
    
   // navi("/login")
  }
  

  return (
    <div className='nav mb-5'>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/"><p>Home</p></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/task">Task</Link>
              </li>
              <li className="nav-item">
                {!data.isLogin ? (<Link className="nav-link" to="/login">Login</Link>)
                  : <button onClick={handleLogout} className='btn'>Logout</button>}
              </li>

              <li className="nav-item">
                {!data.isLogin ? <Link className="nav-link" to="/signup"  >Sign Up</Link>
                  : <h5>Hi</h5>}
              </li>
            </ul>

          </div>
        </div>
      </nav>
    </div>
  )
}
