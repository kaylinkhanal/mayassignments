import React from 'react';

const LoginPage = () => {
  return (
    <div style={{
      display: 'flex',
      minHeight: '100vh',
      background: '#f6f9fc',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px'
    }}>
      {/* Left Illustration */}
      <div style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}>
        <img
          src="https://cdn.dribbble.com/users/1162077/screenshots/3848914/programmer.png"
          alt="Illustration"
          style={{ width: '90%', maxWidth: '400px' }}
        />
      </div>

      {/* Right Login Form */}
      <div style={{
        flex: 1,
        background: '#ffffff',
        padding: '40px',
        borderRadius: '12px',
        boxShadow: '0 0 30px rgba(0,0,0,0.05)',
        maxWidth: '450px'
      }}>
        <h2 style={{ marginBottom: '10px', fontWeight: '600' }}>Welcome Back 🙂</h2>
        <p style={{ marginBottom: '30px', fontSize: '14px', color: '#555' }}>
          To keep connected with us please login with your personal information.
        </p>
        
        <form>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '20px',
              border: '1px solid #ccc',
              borderRadius: '8px'
            }}
          />

          <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '10px',
              border: '1px solid #ccc',
              borderRadius: '8px'
            }}
          />

          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '20px'
          }}>
            <div>
              <input type="checkbox" id="remember" />
              <label htmlFor="remember" style={{ marginLeft: '5px', fontSize: '14px' }}>Remember Me</label>
            </div>
            <a href="#" style={{ fontSize: '14px', color: '#007bff' }}>Forgot Password?</a>
          </div>

          <button type="submit" style={{
            width: '100%',
            padding: '12px',
            background: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}>
            Login Now
          </button>

          <button style={{
            width: '100%',
            padding: '12px',
            background: '#f2f2f2',
            color: '#000',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: 'bold',
            marginTop: '10px',
            cursor: 'pointer'
          }}>
            Create Account
          </button>

          <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '14px' }}>
            Or you can join with
          </p>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '10px',
            marginTop: '10px'
          }}>
            <img src="https://cdn-icons-png.flaticon.com/512/281/281764.png" alt="Google" width="24" />
            <img src="https://cdn-icons-png.flaticon.com/512/733/733635.png" alt="Facebook" width="24" />
            <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" width="24" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
