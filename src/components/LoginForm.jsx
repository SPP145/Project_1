import { Link } from 'react-router-dom';

function LoginForm() {
  return (
    <div className="right-side">
    <form>
      <h1 className="word">LOG IN</h1>
      <input className="styled-input" placeholder="Username" />
      <p><input className="styled-input"placeholder="Password" /></p>
      <p> <button className="button1">LOG IN</button></p>
      <p>ยังไม่มีบัญชีใช่ไหม? <Link to="/signup">Sign Up</Link></p>
      <p> - or Sign up with - </p>
     <button className="my-button">
       <img src="G.png" alt="Google icon" class="google-icon" />
       <span>Sign up with Google</span>
       </button>
       
    </form>
    </div>
  );
}
export default LoginForm;
