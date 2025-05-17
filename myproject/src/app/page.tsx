import React from 'react';

const Page = () => {
  return (
    <>
      <style>{`
        html, body, #root {
          margin: 0;
          padding: 0;
          height: 100%;
          font-family: 'Poppins', sans-serif;
          overflow: hidden; /* Prevent scrolling */
        }

        #background {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('https://images.prismic.io/loco-blogs/79328284-f97b-489f-924c-eb3b17e34b56_image2.png?auto=compress%2Cformat&rect=0%2C0%2C1999%2C1124&w=3840&fit=max') no-repeat center center fixed;
          background-size: cover;
          z-index: -2;
        }

        #overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.15);
          z-index: -1;
        }

        .wrapper {
          position: fixed; /* Fixed to keep it in place */
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1;
        }

        .container {
          background: rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(15px);
          border-radius: 20px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.35);
          padding: 40px 30px;
          width: 320px;
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.25);
          color: #111;
        }

        h2 {
          font-size: 26px;
          font-weight: 600;
          margin-bottom: 25px;
        }

        input {
          width: 100%;
          padding: 12px 15px;
          margin: 12px 0;
          border: none;
          border-radius: 12px;
          font-size: 14px;
          outline: none;
          background-color: rgba(255, 255, 255, 0.8);
          color: #111;
        }

        input:focus {
          background-color: rgba(255, 255, 255, 1);
        }

        button {
          width: 100%;
          padding: 12px;
          background-color: #6c63ff;
          color: white;
          border: none;
          border-radius: 12px;
          font-size: 16px;
          font-weight: bold;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        button:hover {
          background-color: #574fd6;
        }
      `}</style>

      <div id="background"></div>
      <div id="overlay"></div>

      <div className="wrapper">
        <div className="container">
          <h2>Login</h2>
          <form>
            <input type="text" placeholder="Username" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Log In</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Page;
