import { Link } from 'react-router-dom';

function LoginForm() {
  return (
    <div className="right-side">
    <form>
      <h1 className="word">LOG IN</h1>
      <input className="styled-input" placeholder="Username" />
      <p><input className="styled-input"placeholder="Password" /></p>

      <p> <button type="submit" className="button1">LOG IN</button></p>
      <div className='W1'>
      <p>ยังไม่มีบัญชีใช่ไหม <Link to="/signup">Sign Up</Link></p>
      <p>- or continue with - </p>
      </div>

     <button className="my-button">
       <img src="G.png" alt="Google icon" class="google-icon" />
       <span>Continue with Google</span>
       </button>
       
    </form>
    </div>
  );
}
export default LoginForm;
