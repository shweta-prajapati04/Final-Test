import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { funDeletetask } from '../Redux/Action'

export const Home = () => {
  let data = useSelector((store) => store)
  let [task, setTask] = useState([])
  let [d, setD] = useState([])
  let navi = useNavigate();
  let [status, setStatus] = useState("")
  let [isUpdate, setIsUpdate] = useState(false)
  let [id, setId] = useState(0)
  let dispatch = useDispatch();
  // console.log(data)
  const getTask = () => {
    axios.get('http://localhost:5000/task')
      .then((res) => {
        setTask(res.data)
        setD(res.data)
      })
  }
  const setFilter = (param) => {
    if (param == "All")
      setTask(d)
    else {
      let s = d.filter((val, i) => val.status === param)
      setTask(s)
    }

  }
  const updateStatus = (tid, val) => {
    setId(tid)
    setStatus(val)
  }
  const handleUpdate = () => {
    let obj = { status: status }
    axios.patch(`http://localhost:5000/task/${id}`, obj)
      .then((res) => {
        setId(0)
        setStatus("")
        alert("Updated")
      })

  }
  const handleDelete = (tid) => {
    dispatch(funDeletetask(tid))
  }
  useEffect(() => {
    if (data.isLogin)
      getTask();
    else
      navi("/login")
  }, [handleDelete])

  return (
    <div>
      <div className='d-flex'>
        <button onClick={() => setFilter("All")} className='btn btn-outline-danger'>All</button>
        <button onClick={() => setFilter("pending")} className='btn btn-outline-danger'>Pending</button>
        <button onClick={() => setFilter("complete")} className='btn btn-outline-danger'>Completed</button>
      </div>
      {id != 0 ? (<div className='alert alert-warning mb-5 mt-5 col-md-5 mx-auto'>
        <select className='form-control' onChange={(e) => setStatus(e.target.value)} value={status}>
          <option value="" >Select</option>
          <option value="pending" >pending</option>
          <option value="complete">complete</option>
        </select>
        <br></br>
        <button onClick={handleUpdate} className='btn btn-primary mt-3'>Update Status</button>
      </div>) : ""}
      {
        task && task.length > 0 &&
        task.map((ele) => {
          return (

            <div className='alert alert-info' key={ele.id}>
              <div>{ele.title}</div>
              <div>{ele.duedate}</div>
              <div>{ele.status}</div>
              <div className='d-flex'>

                <button className='btn btn-success' onClick={() => updateStatus(ele.id, ele.status)} >update</button>
                <button className='btn btn-danger' onClick={() => handleDelete(ele.id)} >Delete</button>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}
