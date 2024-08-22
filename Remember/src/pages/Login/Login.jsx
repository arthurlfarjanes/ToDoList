// CSS
import './Login.css'

// React
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {

  const navigate = useNavigate()

  return (
    <div className='Container'>
      <div className="box">
        <form className="formStyle">
          <h1>Login</h1>
          <input type="text" placeholder="Username" />
          <input type="email" placeholder='E-mail' />
          <input type="password" placeholder="Password" />
          <button className='btn-blue' type="submit">Entrar</button>
          <p className="goOtherPage">Não tem uma conta? <span onClick={() => {navigate("/register")}}>Cadastre-se</span></p>
        </form>
      </div>
    </div>
  )
}

export default Login