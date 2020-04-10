import React from "react";
import Wrapper from "../components/Common/Wrapper";
import Layout from "../components/layout";
import {PREFIX} from "../constants";
import {Helmet} from 'react-helmet';
import {LoginButton, LoginForm} from "../components/Login/styled";

const Login = ({location}) => (
    <Layout location={location}>
        <Helmet>
            <title>
                {`${PREFIX} | LOGIN`}
            </title>
            <meta name="og:title" content={`${PREFIX}LOGIN`}/>
        </Helmet>
        <Wrapper>
            <LoginForm>
                <input type='text' placeholder='Username'/>
                <input type='password' placeholder='Password'/>
                <LoginButton>Login</LoginButton>
            </LoginForm>
        </Wrapper>
    </Layout>
);

export default Login;
