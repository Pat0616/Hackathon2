import './registerdesign.css'
import { useState } from 'react'

function RegisterPage()
{
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const[errorMessage, setErrorMessage] = useState('')

    const TryRegister = () => {
        console.log('Username:', username);
        console.log('Password:', password);
        console.log('Confirm Password:', confirmPassword);

        if(password !== confirmPassword)
        {
            setErrorMessage('Passwords do not match');
        }

        else{
            setErrorMessage('');
        }
    }

    return(
        <div className="loginpage-wrapper">
            <div className="loginpage-container">
                <svg className='box-icon'></svg>
                <h1>Inventory</h1>
                <p>Admin Register</p>
                <div className="input-group">
                    <p>Username</p>
                </div>
                    <input onChange={(e)=>setUsername(e.target.value)} value={username} type="text" id="username" placeholder="Enter username" />
                <div className="input-group">
                    <p>Password</p>
                </div>
                    <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" id="password" placeholder="Enter password" />
                <div className="input-group">
                    <p>Confirm Password</p>
                </div>
                    <input onChange={(e)=>setConfirmPassword(e.target.value)} value={confirmPassword} type="password" id="confirm-password" placeholder="Confirm password" />
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                <button className="login-button" onClick={TryRegister}>Register</button>
                <a href="/login" className="register-link">Already have an account? Back to Login</a>
            </div>
        </div>
    )
}
export default RegisterPage;
