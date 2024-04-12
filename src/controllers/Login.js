import React from 'react';

const Login = () => {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f3f4f6', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: '4rem', paddingLeft: '1rem', paddingRight: '1rem' }}>
      <div style={{ margin: 'auto', width: '100%', maxWidth: '24rem' }}>
        <h2 style={{ marginTop: '1.5rem', textAlign: 'center', fontSize: '1.875rem', fontWeight: 'bold', color: '#111827' }}>Sign in to your account</h2>
      </div>

      <div style={{ marginTop: '2rem', margin: 'auto', width: '100%', maxWidth: '24rem', backgroundColor: '#fff', padding: '2rem', borderRadius: '0.5rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }}>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} action="#" method="POST">
          <div>
            <label htmlFor="email" style={{ fontSize: '0.875rem', fontWeight: 'medium', color: '#6B7280' }}>Email address</label>
            <div style={{ marginTop: '0.25rem' }}>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                style={{ width: '100%', padding: '0.75rem', border: '1px solid #D1D5DB', borderRadius: '0.375rem', boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.05)', fontSize: '0.875rem' }}
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" style={{ fontSize: '0.875rem', fontWeight: 'medium', color: '#6B7280' }}>Password</label>
            <div style={{ marginTop: '0.25rem' }}>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                style={{ width: '100%', padding: '0.75rem', border: '1px solid #D1D5DB', borderRadius: '0.375rem', boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.05)', fontSize: '0.875rem' }}
              />
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                style={{ width: '1rem', height: '1rem', marginRight: '0.5rem' }}
              />
              <label htmlFor="remember_me" style={{ fontSize: '0.875rem', fontWeight: 'medium', color: '#6B7280' }}>Remember me</label>
            </div>

            <div style={{ fontSize: '0.875rem', color: '#6B7280' }}>
              <a href="#" style={{ color: '#2563EB', fontWeight: 'medium', textDecoration: 'none' }}>Forgot your password?</a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              style={{ width: '100%', padding: '0.75rem', backgroundColor: '#2563EB', color: '#fff', border: '1px solid #2563EB', borderRadius: '0.375rem', fontSize: '0.875rem', fontWeight: 'medium', cursor: 'pointer' }}
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
