import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import history from '../history';
import api from '../services/api';

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');

    if (accessToken) {
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

  function handleLogout() {
    setAuthenticated(false);
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('userData');
    api.defaults.headers.Authorization = undefined;
    toast.info('You are logged out!');
    history.push('/login');
  }

  return { authenticated, loading, handleLogin, handleLogout };
}
