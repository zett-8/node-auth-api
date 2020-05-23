import React, { useState } from 'react'
import axios from 'axios'

export const App = () => {
  const [data, setData] = useState('')
  const [email, setEmail] = useState('admin@gmail.com')
  const [password, setPass] = useState('admin')
  const [status, setStatus] = useState(localStorage.getItem('jwt-token'))

  const fetchData = () => {
    axios
      .get(`api/genre?token=${localStorage.getItem('jwt-token')}`, { withCredentials: true })
      .then(res => setData(JSON.stringify(res.data)))
      .catch(err => setData(JSON.stringify(err.response)))
  }

  const login = (e) => {
    e.preventDefault()

    axios
      .post('/users/login', { email, password })
      .then(res => {
        console.log(res)
        localStorage.setItem('jwt-token', res.data.token)
        setStatus(localStorage.getItem('jwt-token'))
      })
      .catch(err => console.log(err))
  }

  const logout = () => {
    axios.get('/users/logout').then(() => {
      localStorage.removeItem('jwt-token')
      setStatus(localStorage.getItem('jwt-token'))
    })
  }

  return (
    <div>
      <p>Auth status: {
        status
          ? <span style={{ color: 'rgb(0, 200, 0)' }}>logged in</span>
          : <span style={{ color: 'rgb(200, 0, 0)'}}>logout</span>
        }
      </p>
      <div>
        <button className={'fetchButton'} onClick={fetchData}>fetch data</button>
        <div className={'resBox'}>
          <p>response</p>
          <div>{data}</div>
        </div>
      </div>
      <form onSubmit={login}>
        <input readOnly type={'text'} name={'email'} value={email} onChange={e => setEmail(e.target.value)}></input>
        <input readOnly text={'text'} name={'password'} value={password} onChange={e => setPass(e.target.value)}></input>
        <button type={'submit'}>login</button>
        <button type={'button'} onClick={logout}>logout</button>
      </form>
    </div>
  )
}
