import {useLocation,useNavigate} from 'react-router-dom'
import { useAuth } from '../hook/userAuth'
import React from 'react'

export const Loginpage = () => {

    const navigate = useNavigate()

    const location = useLocation()

    const {signin} = useAuth()
    const fromPage = location.state?.from?.pathname || '/'
    const handlerSubmit = (e)=>{
        e.preventDefault();
        const form = e.target
        const user = e.username.value
        signin(user,()=>navigate(fromPage, {replace: true}))
    }
    return (
        <div>
            <h1>Login page</h1>
            <form onSubmit={handlerSubmit}>
                <label>
                    Name: <input name="username"/>
                </label>
                <button type="submit"> Log In</button>
            </form>
        </div>
    )
}
