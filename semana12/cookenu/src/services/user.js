import axios from 'axios'
import {BASE_URL} from '../constants/urls'
import {goToRecipesList} from '../routes/coodinator'

export const login = (body, clear, history, setRightButtonText) => {
    axios.post(`${BASE_URL}/user/login`, body)
    .then((res)=>{
        localStorage.setItem("token", res.data.token)
        clear()
        goToRecipesList(history)
        setRightButtonText("Logout")
    })
    .catch((err)=>alert(err.response.data.message))

}
export const signUP = (body, clear, history, setRightButtonText) => {
    axios.post(`${BASE_URL}/user/sigup`, body)
    .then((res)=>{
        localStorage.setItem("token", res.data.token)
        clear()
        goToRecipesList(history)
        setRightButtonText("Logout")
    })
    .catch((err)=>alert(err.response.data.message))

}