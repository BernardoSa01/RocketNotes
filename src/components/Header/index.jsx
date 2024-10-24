import { RiShutDownLine } from 'react-icons/ri';
import { useAuth } from '../../hooks/auth'
import { Container, Profile, Logout } from "./styles";

export function Header() {
  const { signOut } = useAuth()

  return (
    <Container>
      <Profile to="/profile">
        <img 
          src="https://github.com/BernardoSa01.png"
          alt="Imagem de Bernardo Sá"
        />

        <div>
          <span>Bem-vindo,</span>
          <strong>Bernardo Sá</strong>
        </div>
      </Profile>

      <Logout onClick={signOut}>
        <RiShutDownLine/>
      </Logout>
    </Container>
  );
}