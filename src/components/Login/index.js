import React, {useContext, useState} from 'react';
import {FormButton, LoginForm} from './styled';
import {handleLogin} from '../../services/auth';
import {myContext} from '../App/AppContext';

const Login = ({location}) => {
    const context = useContext(myContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin({username: username, password: password}, context);
        setUsername('');
        setPassword('');
    };

    const handleChange = (e) => {
        e.preventDefault();
        const {name, value} = e.target;
        switch (name) {
            case 'username' :
                setUsername(value);
                break;
            case 'password':
                setPassword(value);
                break;
        }
    }

    return (
        <myContext.Consumer>
            {(context) => {
                let authError;
                let message;
                if (typeof context !== 'undefined') {
                    authError = context.authError;
                    if (typeof authError !== 'undefined' && authError !== '') {
                        message = authError.message;
                    }
                }
                return (
                    <LoginForm onSubmit={handleSubmit}>
                        <div className={'login-error'}>{message}</div>
                        <input name='username' value={username} type="text" placeholder="Username" onChange={handleChange}/>
                        <input name='password' value={password} type="password" placeholder="Password" onChange={handleChange}/>
                        <FormButton onClick={handleSubmit}>Login</FormButton>
                    </LoginForm>
                );
            }}
        </myContext.Consumer>)
}

export default Login;
