import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import jwt from 'jsonwebtoken';

import history from '../history';
import api from '../services/api';

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    let accessToken = localStorage.getItem('accessToken');

    if (accessToken) {
      if (tokenExpired(accessToken)) accessToken = await refreshToken();

      api.defaults.headers.Authorization = `Bearer ${accessToken}`;
      setAuthenticated(true);
    }

    setLoading(false);
  }, []);

  async function handleLogin(username, password) {
    if (username === '' || password === '') {
      toast.info('Informe usuário e senha!');
      return;
    }

    const id = toast.loading('Please wait...');

    try {
      const { status, data } = await api.post('login', { email: username, password });

      if (status === 200) {
        const { accessToken, refreshToken, user } = data;
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        localStorage.setItem('userData', JSON.stringify(user));

        toast.success('Login succeded!');
        api.defaults.headers.Authorization = `Bearer ${accessToken}`;
        setAuthenticated(true);
        history.push('/');
      } else {
        toast.error('Falha no login!');
      }
    } catch (err) {
      toast.error(err.message);
    }

    toast.dismiss(id, 4000);
  }

  async function handleLogout() {
    setAuthenticated(false);
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('userData');
    await api.delete('/logout');
    api.defaults.headers.Authorization = undefined;
    toast.info('You are logged out!');
    history.push('/login');
  }

  function tokenExpired(token) {
    return jwt.decode(token).exp * 1000 < Date.now();
  }

  async function refreshToken() {
    const refreshToken = localStorage.getItem('refreshToken');
    if (refreshToken) {
      try {
        const { status, data: { accessToken } } = await api.post('/token', { refreshToken });
        localStorage.setItem('accessToken', accessToken);
        return accessToken;
      } catch (err) {
        toast.error('Falha na comunicação com o servidor');
        handleLogout();
        return null;
      }
    } else {
      return null;
    }
  }

  return { authenticated, loading, handleLogin, handleLogout };
}
