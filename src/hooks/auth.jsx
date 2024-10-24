import { createContext, useContext, useState, useEffect } from "react";

import { api } from '../services/api'

export const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [data, setData] = useState({})

  // função de autenticação
  async function SignIn({ email, password }) {
    
    try {
      const response = await api.post('/sessions', { email, password })
      const { user, token } = response.data

      // Utilizando o Local Storage para armazenar informações no navegador do usuário
      localStorage.setItem('@rocketnotes:user', JSON.stringify(user))
      localStorage.setItem('@rocketnotes:token', token)

      // Inserindo token Bearer de autorização
      api.defaults.headers.authorization = `Bearer ${token}`
      setData({ user, token })

    } catch(error) {
      if(error.response) {
        alert(error.response.data.message)
      } else {
        alert('Não foi possível fazer login.')
      }
    }
  }

  function signOut() {
    // Removendo as informações do LocalStorage
    localStorage.removeItem('@rocketnotes:token')
    localStorage.removeItem('@rocketnotes:user')

    setData({})

  }

  useEffect(() => {
    const token = localStorage.getItem('@rocketnotes:token')
    const user = localStorage.getItem('@rocketnotes:user')

    if(token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`

      setData({
        token,
        user: JSON.parse(user)
      })
    }
  }, [])

  return (
    <AuthContext.Provider value={{ 
      SignIn, 
      signOut,
      user: data.user
    }}
    >
      { children }
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuth }