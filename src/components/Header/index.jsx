import { RiShutDownLine } from 'react-icons/ri';
import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'

import { useNavigate } from 'react-router-dom';


import { Container, Profile, Logout } from "./styles";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

export function Header() {
  const { signOut, user } = useAuth()
  const navigate = useNavigate()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder


  return (
    <Container>
      <Profile to="/profile">
        <img 
          src={avatarUrl}
          alt={user.name}
        />

        <div>
          <span>Bem-vindo,</span>
          <strong>{user.name}</strong>
        </div>
      </Profile>

      <Logout onClick={() => {signOut(), navigate('/')} }>
        <RiShutDownLine/>
      </Logout>
    </Container>
  );
}