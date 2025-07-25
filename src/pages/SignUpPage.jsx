import React from 'react';
import { useNavigate } from 'react-router-dom';

function SignUpPage() {
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    // TODO: เพิ่ม logic สมัครสมาชิกที่นี่ เช่น validation, API call
    alert('สมัครสมาชิกสำเร็จ!');
    navigate('/'); // กลับไปหน้า login
  };

  return (
    <div className="background-layer">
    <div className="form-wrapper">
      <h2>SIGN UP</h2>
      <form onSubmit={handleSignUp}>
        <div className='textbox'>
          <input type="text" placeholder="Username"required />
        </div>
        <div className='textbox'>
          <input type="email" placeholder="Email" required />
        </div>
        <div className='textbox'>
          <input type="password" placeholder="Password"required />
        </div>
        <button type="submit"> SIGN UP </button>
      </form>
    </div>
    </div>
  );
}

export default SignUpPage;