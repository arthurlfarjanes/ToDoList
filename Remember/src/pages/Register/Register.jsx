// CSS
import './Register.css'

// React
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Register() {

  const navigate = useNavigate()

  return (
    <div className='Container'>
      <div className="box">
        <form className="formStyle">
          <h1>Register</h1>
          <input type="text" placeholder="Username" />
          <input type="email" placeholder='E-mail' />
          <input type="password" placeholder="Password" />
          <button className='btn-blue' type="submit">Cadastrar</button>
          <p className="goOtherPage">Já tem uma conta? <span onClick={() => {navigate("/")}}>Faça Login</span></p>
        </form>
      </div>
    </div>
  )
}

export default Register