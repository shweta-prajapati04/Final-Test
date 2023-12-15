import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export const Task = () => {
    let [title, setTitle] = useState("")
    let [duedate, setDueDate] = useState("")
    let storeData = useSelector((store) => store)
    let navi=useNavigate()
    const handleTask = (e) => {
        e.preventDefault();
        let obj = { title: title,status:"pending", duedate: duedate }
        axios.post('http://localhost:5000/task', obj)
            .then((res) => navi("/"))

    }
    useEffect(() => {
        if (!storeData.isLogin)
            navi("/")
    })
    return (
        <div>
            <form onSubmit={handleTask}>
                <div className='col-md-10 mx-auto'>
                    <div className='col-md-7 mx-auto'>
                        <div className='mb-2 col-md-5'>
                            <input type='text' required className='form-control' placeholder='Title'
                                onChange={(e) => setTitle(e.target.value)}
                            ></input>
                        </div>
                        <div className='mb-2 col-md-5'>
                            <input type='date' required className='form-control' placeholder='Due Date'
                                onChange={(e) => setDueDate(e.target.value)}
                            ></input>
                        </div>
                        <div className='mb-2  col-md-5'>
                            <button type='submit' className='btn btn-primary'  >Add Task</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
