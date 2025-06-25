// src/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import API from './api/config';


function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(API.LOGIN, {
        username,
        password
      });

      const token = res.data.result.token || res.data.result.access_token;
      localStorage.setItem('access_token', token);

      navigate('/page1');
    } catch (err) {
      console.error('Login failed', err);
      setError('Sai thông tin đăng nhập');
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: '50px auto', padding: 20, border: '1px solid #ddd', borderRadius: 8 }}>
      <h2>Đăng nhập</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleLogin}>
        <div style={{ marginBottom: 10 }}>
          <label>Tên đăng nhập:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{ width: '100%', padding: 8 }}
          />
        </div>
        <div style={{ marginBottom: 10 }}>
          <label>Mật khẩu:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: '100%', padding: 8 }}
          />
        </div>
        <button type="submit" style={{ padding: 10, width: '100%', backgroundColor: '#007bff', color: '#fff', border: 'none' }}>
          Đăng nhập
        </button>
      </form>
    </div>
  );
}

export default Login;
