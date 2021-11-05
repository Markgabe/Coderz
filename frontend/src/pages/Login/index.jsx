import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { toast } from 'react-toastify';

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

    if (username === '' || password === '') {
      toast.info('Informe usuário e senha!');
      return;
    }

    const id = toast.loading('Please wait...');

    if (process.env.REACT_APP_SKIP_LOGIN_REQUEST !== 'true') {
      api
        .post('login', {
          email: username,
        })
        .then((response) => {
          if (response.status === 200) {
            const { accessToken, refreshToken, user } = response.data;
            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('refreshToken', refreshToken);
            localStorage.setItem('username', user.name);
            toast.success('Login succeded!');
            history.push('/');
          } else {
            toast.error('Falha no login!');
          }
        })
        .catch((err) => {
          toast.error(err.message);
        });
    } else {
      toast.success('Login succeded!');
      history.push('/');
    }
    toast.dismiss(id, 4000);
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
