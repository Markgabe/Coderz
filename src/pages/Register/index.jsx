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
  UserLoginRedirect,
  RedirectButton,
} from './styles';

export default function Login() {
  const history = useHistory();

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === '' || password === '' || name === '') {
      toast.info('Informe nome, usuário e senha!');
      return;
    }

    const id = toast.loading('Please wait...');

    api
      .post('user', {
        name,
        email: username,
        password,
      })
      .then((response) => {
        if (response.status === 200) {
          toast.success(
            'Seu usuário foi criado, agora faça seu primeiro login!'
          );
          history.push('/login');
        } else {
          toast.error('Falha na criação de novo usuário!');
        }
      })
      .catch((err) => {
        toast.error(err.message);
      });

    toast.dismiss(id, 4000);
  };

  return (
    <Container>
      <LoginArea>
        <LoginHeader>Register new account</LoginHeader>
        <FormGroup>
          <CustomInput
            type='text'
            placeholder='Insira seu nome'
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
          <CustomInput
            type='text'
            placeholder='Insira seu nome de usuário'
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            required
          />
          <CustomInput
            type='password'
            placeholder='Insira sua senha'
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
          <SubmitButton
            type='submit'
            onClick={(e) => handleSubmit(e)}
            value='Create'
          />
          <UserLoginRedirect>
            <p>Já possui conta?</p>
            <RedirectButton to='/login'>Faça login!</RedirectButton>
          </UserLoginRedirect>
        </FormGroup>
      </LoginArea>
    </Container>
  );
}
