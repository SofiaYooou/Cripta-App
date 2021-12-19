import React, {useState} from "react";
import "./Login.css"
import { Layout } from '../layout';
import PropTypes from 'prop-types';

async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }

export default function Login({ setUser }) {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async e => {
        e.preventDefault();
        const user = await loginUser({
            login: "admin",
            password: "1234"
        });
        setUser(user);
      }

return (
    <Layout>
        <div className='login'>
        <form onSubmit={handleSubmit} className='login__form'>
            <h1>Login Here</h1>
            <input
            type="name" placeholder="Login"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
            <input
            type="password" placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="submit__btn">Войти</button>
        </form>
        </div>
    </Layout>
        );
};

Login.propTypes = {
    setUser: PropTypes.func.isRequired
  }

//export default Login;