import React, {useContext} from "react";
import {myContext} from "../App/AppContext";
import {FormButton} from "../Login/styled";
import {LogoutPanel} from "./styled";
import UploadForm from "../UploadFrom";

const Upload = () => {
    const context = useContext(myContext);

    const logout = () => {
        context.setAuthenticated(false);
        context.setAuthBody('');
        context.setAuthError('');
    }

    return (
        <myContext.Consumer>
            {() => (
                <>
                    <LogoutPanel>
                        <FormButton onClick={logout}>Logout</FormButton>
                    </LogoutPanel>
                    <UploadForm/>
                </>
            )}
        </myContext.Consumer>
    );
}

export default Upload
