import React from 'react';
import Link from 'next/link'; 

const Login = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#0A4D68',
      }}
    >
      <div
        style={{
          backgroundColor: '#ffffff',
          padding: '40px',
          width: '100%',
          maxWidth: '400px',
          borderRadius: '12px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h2
          style={{
            textAlign: 'center',
            marginBottom: '25px',
            color: '#1565C0',
            fontWeight:700
          }}
        >
          Login to Your Account
        </h2>
        <form>
          <div style={{ marginBottom: '20px' }}>
            <label
              style={{
                display: 'block',
                marginBottom: '8px',
                 fontWeight:600
              }}
            >
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #000000',
                borderRadius: '8px',
                fontSize: '14px',
                //  borderWidth:1,
              }}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label
              style={{
                display: 'block',
                marginBottom: '8px',
                fontWeight:600
              }}
            >
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #000000',
                borderRadius: '8px',
                fontSize: '14px',
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '12px',
              backgroundColor: '#1565C0',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              cursor: 'pointer',
              transition: 'background 0.3s ease',
            }}  >
            Login
          </button>
          <p
            style={{
              textAlign: 'center',
              marginTop: '20px',
              fontSize: '12px',
              fontWeight:600
            }}
          >
            Don't have an account?{' '}
            <Link
              href="/register"
              style={{
                color: '#1565C0',
                textDecoration: 'none',
              }}
            >
              Register here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
