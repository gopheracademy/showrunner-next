import React, { useState, useEffect } from 'react';
import { withRouter } from "next/router";
import { Auth } from 'aws-amplify'
import { AmplifyAuthenticator, AmplifySignOut, AmplifySignUp } from "@aws-amplify/ui-react";


// core components
import AuthNavbar from "components/Navbars/AuthNavbar.js";
import AuthFooter from "components/Footers/AuthFooter.js";

import routes from "routes.js";

const AuthLayout = ({ children }) => {
  const [user, setUser] = useState(null)
  useEffect(() => {
    // Access the user session on the client
    Auth.currentAuthenticatedUser()
      .then(user => {
        console.log("User: ", user)
        setUser(user)
      })
      .catch(err => setUser(null))
  }, [])
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    document.body.classList.add("bg-default");
    return function cleanup() {
      document.body.classList.remove("bg-default");

    }
  });
  return (
    <>
      <div className="main-content" >
        <AuthNavbar />
        <AmplifyAuthenticator usernameAlias="email">
          <AmplifySignUp
            slot="sign-up"
            usernameAlias="email"
            formFields={[
              {
                type: "email",
                label: "Email",
                placeholder: "you@gophers.rule",
                required: true,
              },
              {
                type: "password",
                label: "Password",
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
          {children}
          <AmplifySignOut />

        </AmplifyAuthenticator>
      </div>
      <AuthFooter />
    </>
  );
}

export default withRouter(AuthLayout);
