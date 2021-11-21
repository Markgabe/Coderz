import React, { useState, useEffect, useContext } from 'react';

import history from '../../history';

import { Context } from '../../contexts/AuthContext';

import {
  Container,
  LoginArea,
  LoginHeader,
  FormGroup,
  CustomInput,
  SubmitButton,
  UserSignupRedirect,
  RedirectButton,
} from './styles';

export default function Login() {
  const { handleLogin, authenticated } = useContext(Context);

  useEffect(() => {
    if (authenticated) history.push('/');
  }, []);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(username, password);
  };

  return (
    <Container>
      <LoginArea>
        <LoginHeader>Login to Coderz</LoginHeader>
        <FormGroup>
          <CustomInput
            type='text'
            placeholder='Insira seu nome de usuário'
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <CustomInput
            type='password'
            placeholder='Insira sua senha'
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <SubmitButton
            type='submit'
            onClick={(e) => handleSubmit(e)}
            value='Login'
          />
          <UserSignupRedirect>
            <p>Não possui conta?</p>
            <RedirectButton to='/register'>Registre-se!</RedirectButton>
          </UserSignupRedirect>
        </FormGroup>
      </LoginArea>
    </Container>
  );
}
