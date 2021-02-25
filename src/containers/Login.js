import useFecth from "../utils/useFetch";
import { useState } from 'react';
import { API_ROUTE } from "../utils/api";
import fetch from '../utils/fetch';

const Login = () => {
    const [username, setUsername] = useState();
    const [error, setError] = useState();

    const { data: { data: auth } = {} } = useFecth(`${API_ROUTE}/auth`);
    if (auth) window.location.href = '/app';
    const login = e => {
        e?.preventDefault();
        fetch(`${API_ROUTE}/login`, {
            method: 'POST',
            body: JSON.stringify({
                username,
            }),
        })
            .then(data => {
                const { msg, success, token } = data;
                if (!success) setError(msg);
                else {
                    localStorage.setItem('token', token);
                    window.location.href = '/app'
                }
            })
    }

    const createAndLogin = () => {
        setError(undefined);
        fetch(`${API_ROUTE}/register`, {
            method: 'POST',
            body: JSON.stringify({
                username,
            }),
        })
            .then(data => {
                const { success } = data;
                if (success) login();
            })
    }

    return (
        <div style={{
            textAlign: 'center'
        }}>
            <h1>Login</h1>
            <form onSubmit={login} className="login-form">
                <input
                    onChange={({ target: { value } }) => setUsername(value)}
                    value={username}
                    placeholder="username"
                />
                {error && <div className="error btn">
                    <strong>{error}</strong>
                    <button onClick={createAndLogin}>
                        Create and login
                    </button>
                </div>}
                <input type="submit" value="Login" />
            </form>
            <p>
                Build with easy login. No password needed.
            </p>
        </div>
    )
}

export default Login;