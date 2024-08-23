// CSS
import './Register.css'

// Axios
import api from '../../axios/config'

// React
import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Register() {

  const navigate = useNavigate()


  // States para gerenciar dados do usuário
  const [Nome, setName] = useState('')
  const [Email, setEmail] = useState('')
  const [Senha, setPassword] = useState('')

  // Função de cadastro
  const handleRegister = async (e) => {
    e.preventDefault() // previne recarregamento da página ao enviar formulário

    // Objeto com as informações digitadas pelo usuário
    const requisition = {
      Nome,
      Email,
      Senha
    }

    // Chamada da API de cadastro
    try {
      await api.post('/api/Usuario', requisition)
      alert("Usuário cadastrado com sucesso!")
      navigate('/')
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div className='Container'>
      <div className="box">
        <form onSubmit={handleRegister} className="formStyle">
          <h1>Cadastro</h1>
          <input type="text" placeholder="Nome" onChange={(e) => setName(e.target.value)}/>
          <input type="email" placeholder='E-mail' onChange={(e) => setEmail(e.target.value)}/>
          <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
          <button className='btn-blue' type="submit">Cadastrar</button>
          <p className="goOtherPage">Já tem uma conta? <span onClick={() => {navigate("/")}}>Faça Login</span></p>
        </form>
      </div>
    </div>
  )
}

export default Register