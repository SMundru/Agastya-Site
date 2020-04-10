import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import Wrapper from '../components/Common/Wrapper';
import Layout from '../components/layout';
import { PREFIX } from '../constants';
import { LoginButton, LoginForm } from '../components/Login/styled';
import { handleLogin } from '../services/auth';
import { myContext } from '../components/App/AppContext';

const Login = ({ location }) => {
  const context = useContext(myContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin({ username: 'dmundru', password: 'Agastya@201' }, context);
  };

  return (
    <myContext.Consumer>
      {(context) => (
        <Layout location={location}>
          <Helmet>
            <title>
              {`${PREFIX} | LOGIN`}
            </title>
            <meta name="og:title" content={`${PREFIX}LOGIN`} />
          </Helmet>
          <Wrapper>
            <LoginForm onSubmit={handleSubmit}>
              <div>{context.authError.message}</div>
              <input type="text" placeholder="Username" />
              <input type="password" placeholder="Password" />
              <LoginButton onClick={handleSubmit}>Login</LoginButton>
            </LoginForm>
          </Wrapper>
        </Layout>
      )}
    </myContext.Consumer>
  );
};

export default Login;
