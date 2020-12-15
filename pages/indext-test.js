import React from 'react';
import Amplify from 'aws-amplify';
import { AmplifyAuthenticator, AmplifySignUp, AmplifySignOut, AmplifySignIn } from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import awsconfig from '../src/aws-exports';

Amplify.configure(awsconfig);

const AuthStateApp = () => {
  const [authState, setAuthState] = React.useState();
  const [user, setUser] = React.useState();

  React.useEffect(() => {
    onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUser(authData)
    });
  }, []);

  return (
    <AmplifyAuthenticator usernameAlias="email">
      <AmplifySignUp
        slot="sign-up"
        usernameAlias="email"
        formFields={[
          {
            type: "email",
            label: "Email Address",
            placeholder: "you@gophers.rule",
            required: true,
          },
          {
            type: "password",
            label: "Strong Password",
            placeholder: "SuperS3kritG0ph3r",
            required: true,
          },
          {
            type: "name",
            label: "Full Name",
            placeholder: "Thomomys Bottae",
            required: false,
          },
        ]}
      />
      <AmplifySignIn slot="sign-in" usernameAlias="email" />
    My App
      <AmplifySignOut />
    </AmplifyAuthenticator>
  );
}

export default AuthStateApp;