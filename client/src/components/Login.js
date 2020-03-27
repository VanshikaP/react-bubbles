import React, {useState} from "react";
import axios from 'axios'

const Login = props => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleChanges = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }

  const handleLogIn = e => {
    e.preventDefault();
    setIsLoading(true);
    axios.post('http://localhost:5000/api/login', credentials)
    .then(res => {
      // console.log('Login Response', res);
      window.localStorage.setItem('token', JSON.stringify(res.data.payload));
      setIsLoading(false);
    }).catch(err => console.error(err));
  }
  return isLoading
  ? <h2 className='loading-text'>...Logging In</h2>
  : (
    <div className='login-container'>
      <h2> Log In </h2>
      <form className='login-form'>
        <label htmlFor='username'>Username: 
          <input type='text' name='username' id='username' value={credentials.username} onChange={handleChanges} />
        </label>

        <label htmlFor='password'>Password: 
          <input type='password' name='password' id='password' value={credentials.password} onChange={handleChanges} />
        </label>

        <button className='submit btn' onClick={handleLogIn}>LogIn</button>
      </form>
    </div>
  );
};

export default Login;
