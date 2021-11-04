import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import {
  Container,
  LoginArea,
  LoginHeader,
  FormGroup,
  CustomInput,
  SubmitButton,
} from './styles';

export default function Login() {
  const history = useHistory();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    api
      .post('login', {
        email: username,
      })
      .then((response) => {
        if (response.status === 200) {
          history.push('/');
        }
      })
      .catch((err) => {
        console.error(err);
      });
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
        </FormGroup>
      </LoginArea>
    </Container>
  );
}
