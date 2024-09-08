import { RiShutDownLine } from 'react-icons/ri';
import { Container, Profile, Logout } from "./styles";

export function Header() {
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

      <Logout>
        <RiShutDownLine/>
      </Logout>
    </Container>
  );
}