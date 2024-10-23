import { BrowserRouter } from "react-router-dom";

// importando o hook de autenticação, para acessar o usuário
import { useAuth } from '../hooks/auth'


import { AppRoutes } from "./app.routes";
import { AuthRoutes } from './auth.routes'

export function Routes() {
  const { user } = useAuth()

  return(
    /* Criando condicional:
       Se o usuário estiver logado, renderize o 'AppRoutes'.
       Senão, renderize o 'AuthRoutes'. 
    */  
    <BrowserRouter>
      {user ? <AppRoutes /> : <AuthRoutes />}
    </BrowserRouter>
  )
}