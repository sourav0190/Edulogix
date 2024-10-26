import React from 'react';

function SignIn() {
  return (
    <div className="signin" style={{ minHeight: '100vh', padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center',color:"orange",fontFamily:'cursive' }}>
      <form style={{ display: 'inline-flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
        <h2>Sign In</h2>
        <input type="email" placeholder="Email" required style={{ padding: '10px' }} />
        <input type="password" placeholder="Password" required style={{ padding: '10px' }} />
        <button type="submit" style={{ padding: '10px', backgroundColor: '#007bff', color: 'white', border: 'none', cursor: 'pointer' }}>
          Sign In
        </button>
      </form>
    </div>
  );
}

export default SignIn;
