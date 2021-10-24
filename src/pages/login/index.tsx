import React from 'react';
import { Container, Content } from './styles';
import logo from '@assets/images/logo.svg';

export default function Login(): JSX.Element {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log('submit');
  }

  return (
    <Container>
      <Content>
        <img
          className="logo"
          src={logo}
          alt="Pra cego ver: Logo Boto Fé Nesse Som"
        />
        <form onSubmit={handleSubmit}>
          <div className="formContainer">
            <div>
              <input type="text" id="user" placeholder="usuário" />
              <input type="password" id="password" placeholder="senha" />
            </div>
            <button type="submit">Entrar</button>
          </div>
        </form>
      </Content>
    </Container>
  );
}
