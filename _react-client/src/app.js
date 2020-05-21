import React, { useState } from 'react'
import axios from 'axios'

export const App = () => {
  const [data, setData] = useState([])
  const [email, setEmail] = useState('admin')
  const [password, setPass] = useState('admin')

  const fetchData = () => {
    axios
      .get(`api/genre?token=${localStorage.getItem('jwt-token')}`, { withCredentials: true })
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }

  const login = (e) => {
    e.preventDefault()

    axios
      .post('/users/login', { email, password })
      .then(res => {
        console.log(res)
        localStorage.setItem('jwt-token', res.data.token)
      })
      .catch(err => console.log(err))
  }

  return (
    <div>
      main page
      <div>
        <button onClick={fetchData}>fetch data</button>
        <div>{data.map(d => <p>{d}</p>)}</div>
      </div>
      <form onSubmit={login}>
        <input type={'text'} name={'email'} value={email} onChange={e => setEmail(e.target.value)}></input>
        <input text={'text'} name={'password'} value={password} onChange={e => setPass(e.target.value)}></input>
        <button type={'submit'}>login</button>
      </form>
    </div>
  )
}

