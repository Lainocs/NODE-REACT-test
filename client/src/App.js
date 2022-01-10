import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'

const App = () => {
  const [msg, setMsg] = useState('')
  const handleClick = async () => {
    const data = await window.fetch('/api/user/hello')
    const json = await data.json()
    const msg = json.msg
    
    setMsg(msg)
  }
  // send input value to server
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = await window.fetch('/api/user/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password
      })
    })
    // clear form
    setName('')
    setEmail('')
    setPassword('')
  }
  
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={handleClick}>Dis Bonjour</button>
        <p>{msg}</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor='name'>Name</label>
          <input type='text' value={name} onChange={e => setName(e.target.value)} />
          <label htmlFor='email'>Email</label>
          <input type='text' value={email} onChange={e => setEmail(e.target.value)} />
          <label htmlFor='password'>Password</label>
          <input type='text' value={password} onChange={e => setPassword(e.target.value)} />
          <button type='submit'>Submit</button>
        </form>
      </header>
    </div>
  )
}

export default App
