import React from 'react'
import './Home.css'

const Header = () => {
  return (
    <div className='header'>
      <h1>LOGO</h1>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="http://127.0.0.1:5500/server/public/">Signup</a></li>
        </ul>
    </div>
  )
}

export default Header
