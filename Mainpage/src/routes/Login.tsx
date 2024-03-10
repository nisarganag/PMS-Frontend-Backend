import { useState } from 'react';
import './Login.css';

const Login = ({ onToggle }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="login-username">Username</label>
          <input
            type="text"
            id="login-username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="login-password">Password</label>
          <input
            type="password"
            id="login-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        <button className='auth_button' type="submit">Login</button>
        <p className="toggle-text">Don't have an account? <button className="toggle-button" onClick={onToggle}>Sign Up</button></p>
      </form>
    </div>
  );
};

const SignupPage = ({ onToggle }) => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log('New Firstname:', firstname);
        console.log('New Lastname:', lastname);
        console.log('New email:', email);
        console.log('New Password:', password);
    };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <div className="form-group">
          <label htmlFor="signup-firstname">Firstname</label>
          <input
            type="text"
            id="signup-fullname"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            placeholder="Enter your First name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="signup-lasttname">Lastname</label>
          <input
            type="text"
            id="signup-lastname"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            placeholder="Enter your Last name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="signup-email">Email</label>
          <input
            type="text"
            id="signup-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your Email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="signup-password">Password</label>
          <input
            type="password"
            id="signup-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        <button className='auth_button' type="submit">Sign Up</button>
        <p className="toggle-text">Already have an account? <button className="toggle-button" onClick={onToggle}>Login</button></p>
      </form>
    </div>
  );
};

const AuthPage = () => {
  const [isLoginPage, setIsLoginPage] = useState(true);

  const handleToggle = () => {
    setIsLoginPage(!isLoginPage);
  };

  return (
    <div>
      {isLoginPage ? <Login onToggle={handleToggle} /> : <SignupPage onToggle={handleToggle} />}
    </div>
  );
};

export default AuthPage;
