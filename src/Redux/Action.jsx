import axios from "axios"
import { ERROR, LOGOUT, MSG, SIGNIN, SIGNUP } from "./ActionType"
import { useNavigate } from "react-router-dom"

export const funSignin = (param) => (_dispatch) => {
    try {
        const { email, password } = param
        axios.get(`http://localhost:5000/user?email=${email}&password=${password}`)
            .then((res) => {
                if (res.data && res.data.length > 0) {
                    console.log(res.data)
                    if (res.data[0].email == email && res.data[0].password == password) {
                        _dispatch({ type: SIGNIN, payload: res.data })
                    }
                }
                else
                    _dispatch({ type: ERROR, payload: "No such user found" })

            })
    }
    catch (error) {
        console.log(error)
    }
}
export const funSignUp = (obj) => (_dispatch) => {
    try {
        const { email } = obj
        axios.get(`http://localhost:5000/user?email=${email}`)
            .then((res) => {
                if (res.data && res.data.length > 0) {
                    _dispatch({ type: SIGNUP, payload: "Email exist use another one" })
                }
                else {
                    axios.post('http://localhost:5000/user', obj)
                        .then((res) => _dispatch({ type: SIGNIN, payload: res.data }))
                }
            })

    }
    catch (error) {
        console.log(error)
    }
}
export const funLogout = () => {
    return {
        type: LOGOUT
    }
}
export const funDeletetask = (tid) => (_dispatch) => {
    try {
        axios.delete(`http://localhost:5000/task/${tid}`)
            .then((res) => {

                console.log(tid)
                _dispatch({ type: MSG, payload: "Deleted suceessfully" })
            })
    }
    catch (error) {
        console.log(error)
    }
}