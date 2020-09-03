import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Auth = () => {
    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const signUp = () => {
        axios.post('http://localhost:5000/api/register', user)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    const logIn = () => {
        axios.post('http://localhost:5000/api/login', user)
            .then(res => {
                localStorage.setItem("token", res.data.payload)
            })
            .catch(err => console.log(err))
    }

    const handleChange = event => {
        setUser({ ...user, [event.target.name]: event.target.value })

    }

    const handleSignUp = event => {
        event.preventDefault()
        signUp()
    }

    const handleLogIn = event => {
        event.preventDefault()
        logIn()
    }

    return (
        <form >
            <label htmlFor='email'>Email</label>
            <input id='email' name='email' type='text' onChange={handleChange} />
            <label htmlFor='password'>Password</label>
            <input id='password' name='password' type='password' onChange={handleChange} />
            <button onClick={handleSignUp}>Sign up</button>
            <button onClick={handleLogIn}>Log in</button>
        </form>
    )
}

export default Auth