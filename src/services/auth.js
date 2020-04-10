import * as AmazonCognitoIdentity from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: 'eu-west-2_bbNx5nxfT',
  ClientId: '27o93881bqe1kggq74lefa8jqg',
};
const pool_region = 'eu-west-2';

const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

export const handleLogin = ({ username, password }, context) => {
  const success = {};
  const authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails({
    Username: username,
    Password: password,
  });

  const userData = {
    Username: username,
    Pool: userPool,
  };
  const cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

  cognitoUser.authenticateUser(authenticationDetails, {
    onSuccess(result) {
      console.log(`access token + ${result.getAccessToken().getJwtToken()}`);
      console.log(`id token + ${result.getIdToken().getJwtToken()}`);
      console.log(`refresh token + ${result.getRefreshToken().getToken()}`);
      context.setAuthenticated(true);
      context.setAuthBody(result);
    },
    newPasswordRequired(userAttributes, requiredAttributes) {
      delete userAttributes.email_verified;
      delete userAttributes.phone_number_verified;
      cognitoUser.completeNewPasswordChallenge(password, userAttributes, this);
    },
    onFailure(err) {
      console.log(err);
      context.setAuthError(err);
    },
  });
  return success;
};
