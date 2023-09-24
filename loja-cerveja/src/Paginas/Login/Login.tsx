import React, { useState, FormEvent } from 'react';
import { login } from './Login.service';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import logo from '../../img/logo.svg';
import toast, { Toaster } from 'react-hot-toast';


function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const user = await login(username, password);

    if (user) {
      toast.success('Login efetuado com sucesso!');
      setTimeout(() => {
        navigate('/catalogo');
      }, 1000);

    } else {
      toast.error('Login ou senha Incorretos');
    }
  };

  return (
    <div className="parent">
      <Toaster />
    <form className="container" onSubmit={handleSubmit}>
      <img src={logo} alt="" />
      <label className='preencher'>
        Usuário:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label className='preencher'>
        Senha:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <input onClick={handleSubmit} className='btn-entrar' type="submit" value="Entrar" />
    </form>
    </div>
  );
}

export default Login;
