import { useState } from 'react';
import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

function Login() {
  const [mode, setMode] = useState('login');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    try {
      if (mode === 'login') {
        const res = await axios.post(`${API_BASE}/auth/login`, { email, password });
        setMessage(`Welcome back, ${res.data.user.name}`);
        localStorage.setItem('hc_token', res.data.token);
      } else {
        const res = await axios.post(`${API_BASE}/auth/register`, { name, email, password });
        setMessage(`Account created for ${res.data.user.name}`);
      }
    } catch (err) {
      setMessage(err.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <main className="page-container" style={{ paddingTop: '7rem', display: 'flex', justifyContent: 'center' }}>
      <div className="glass" style={{ width: '100%', maxWidth: '420px', padding: '2.25rem 2rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.6rem', marginBottom: '0.25rem' }}>
            {mode === 'login' ? 'Welcome back' : 'Create account'}
          </h2>
          <p style={{ fontSize: '0.85rem', opacity: 0.8 }}>
            {mode === 'login' ? 'Login to access your dashboard.' : 'Sign up to start learning.'}
          </p>
        </div>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
          {mode === 'register' && (
            <div>
              <label style={{ fontSize: '0.8rem', opacity: 0.8 }}>Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Student Name"
                style={{
                  width: '100%',
                  marginTop: '0.3rem',
                  padding: '0.6rem 0.75rem',
                  borderRadius: '0.75rem',
                  border: '1px solid rgba(148,163,184,0.6)',
                  background: 'rgba(15,23,42,0.7)',
                  color: 'white'
                }}
              />
            </div>
          )}
          <div>
            <label style={{ fontSize: '0.8rem', opacity: 0.8 }}>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="you@example.com"
              style={{
                width: '100%',
                marginTop: '0.3rem',
                padding: '0.6rem 0.75rem',
                borderRadius: '0.75rem',
                border: '1px solid rgba(148,163,184,0.6)',
                background: 'rgba(15,23,42,0.7)',
                color: 'white'
              }}
            />
          </div>
          <div>
            <label style={{ fontSize: '0.8rem', opacity: 0.8 }}>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="••••••••"
              style={{
                width: '100%',
                marginTop: '0.3rem',
                padding: '0.6rem 0.75rem',
                borderRadius: '0.75rem',
                border: '1px solid rgba(148,163,184,0.6)',
                background: 'rgba(15,23,42,0.7)',
                color: 'white'
              }}
            />
          </div>
          <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
            {mode === 'login' ? 'Login' : 'Sign up'}
          </button>
        </form>
        <div style={{ marginTop: '1rem', fontSize: '0.8rem', textAlign: 'center' }}>
          {mode === 'login' ? (
            <>
              New here?{' '}
              <button
                type="button"
                onClick={() => setMode('register')}
                style={{ background: 'none', border: 'none', color: '#38bdf8', cursor: 'pointer' }}
              >
                Create an account
              </button>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <button
                type="button"
                onClick={() => setMode('login')}
                style={{ background: 'none', border: 'none', color: '#38bdf8', cursor: 'pointer' }}
              >
                Login
              </button>
            </>
          )}
        </div>
        {message && (
          <div style={{ marginTop: '1rem', fontSize: '0.8rem', opacity: 0.9 }}>
            {message}
          </div>
        )}
      </div>
    </main>
  );
}

export default Login;

