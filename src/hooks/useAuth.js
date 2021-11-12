import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default function useAuth() {
  const history = useHistory();
  useEffect(() => {
    if (
      localStorage.getItem('username') === '' ||
      localStorage.getItem('username') === null
    ) {
      history.push('/login');
    }
  }, []);
}
