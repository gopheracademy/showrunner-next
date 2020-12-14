import React from "react";
import { withRouter } from "next/router";
// core components
import AuthNavbar from "components/Navbars/AuthNavbar.js";
import AuthFooter from "components/Footers/AuthFooter.js";

import routes from "routes.js";

class Auth extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.mainContent.scrollTop = 0;
    document.body.classList.add("bg-default");
  }
  componentWillUnmount() {
    document.body.classList.remove("bg-default");
  }
  render() {
    return (
      <>
        <div className="main-content" ref="mainContent">
          <AuthNavbar />
          {this.props.children}
        </div>
        <AuthFooter />
      </>
    );
  }
}

export default withRouter(Auth);
