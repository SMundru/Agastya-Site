import React from 'react';
import Login from "../components/Login";
import Layout from "../components/layout";
import {PREFIX} from "../constants";
import Wrapper from "../components/Common/Wrapper";
import {myContext} from "../components/App/AppContext";
import Upload from "../components/Upload";
import {Helmet} from "react-helmet";

const Admin = ({location}) =>
    <myContext.Consumer>
        {(context) => {
            let authenticated;
            if(typeof context !== 'undefined') {
                authenticated = context.authenticated;
            }
            return (
                <Layout location={location}>
                    <Helmet>
                        <title>
                            {`${PREFIX}ADMIN`}
                        </title>
                        <meta name="og:title" content={`${PREFIX}ADMIN`}/>
                    </Helmet>
                    <Wrapper>
                        {typeof authenticated !== 'undefined' && authenticated.toString() === 'true' ?
                            <Upload/> : <Login location={location}/>}
                    </Wrapper>
                </Layout>
            )
        }}
    </myContext.Consumer>

export default Admin;
