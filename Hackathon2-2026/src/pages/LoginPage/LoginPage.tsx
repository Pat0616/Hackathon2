import './logindesign.css'
import { useState } from 'react'
import {login, getMe} from '../../utils/authAPI'
import { useNavigate } from 'react-router-dom';
import {useAuth} from '../../context/AuthenticationContext'

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const {setUser} = useAuth();
    

    const TryLogin = async () => {
        try{
            const res = await login(username, password);
            console.log(res);
            const currentUser = await getMe();
            setUser(currentUser);
            navigate("/dashboard");
        }
        catch(err)
        {
            console.log("error signing in")
        }
    }

    return (
        <div className="loginpage-wrapper">
            <div className="loginpage-container">
                <svg className='box-icon'></svg>
                <h1>Inventory</h1>
                <p>Admin Login</p>

                <div className="input-group">
                    <p>Username</p>
                </div>
                    <input onChange={(e) => setUsername(e.target.value)}value={username}type="text"id="username"placeholder="Enter username"className='input-login'/>
                <div className="input-group">
                    <p>Password</p>
                </div>
                    <input onChange={(e) => setPassword(e.target.value)}value={password}type="password"id="password"placeholder="Enter password"/>
                        <button className="login-button" onClick={TryLogin}>Login</button>
                <a href="/register" className="register-link">Don't have an account? Register Here</a>
            </div>
        </div>
    )
}

export default LoginPage