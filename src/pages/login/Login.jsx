import { useEffect, useState } from 'react';
import styles from './Login.module.css';
import { initUsers, login } from '../../services/authService';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    initUsers();

    const rememberedEmail = localStorage.getItem('remember_email');
    if (rememberedEmail) {
      setEmail(rememberedEmail);
      setRemember(true);
    }
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Preencha todos os campos');
      return;
    }

    if (!email.includes('@')) {
      setError('Email inválido');
      return;
    }

    try {
      const user = login(email, password);

      if (remember) {
        localStorage.setItem('remember_email', email);
      } else {
        localStorage.removeItem('remember_email');
      }

      //  Redirecionamento baseado na role
      switch (user.role) {
        case 'admin':
          navigate('/homeAdmin');
          break;
        case 'tecnichal':
          navigate('/homeTechnical');
          break;
        case 'user':
        default:
          navigate('/homeUser');
          break;
      }

} catch (err) {
  setError(err.message);
}
  }

  return (
    <div className={styles.container}>
      <form className={styles.card} onSubmit={handleSubmit}>
        <h1 className={styles.logo}>FastDesk</h1>

        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <label className={styles.remember}>
          <input
            type="checkbox"
            checked={remember}
            onChange={e => setRemember(e.target.checked)}
          />
          Lembrar de mim
        </label>

        {error && <span className={styles.error}>{error}</span>}

        <button type="submit">ENTRAR</button>

        <div className={styles.links}>
          <a href="#">Esqueceu a senha?</a>
          <a href="#">Suporte</a>
        </div>
      </form>
    </div>
  );
}