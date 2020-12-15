/*!

=========================================================
* Argon Dashboard PRO React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-pro-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Suspense, lazy } from 'react';

import ReactDOM from "react-dom";
// react library for routing
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "react-notification-alert/dist/animate.css";
import "react-perfect-scrollbar/dist/css/styles.css";
// plugins styles downloaded
import "assets/vendor/fullcalendar/dist/fullcalendar.min.css";
import "assets/vendor/sweetalert2/dist/sweetalert2.min.css";
import "assets/vendor/select2/dist/css/select2.min.css";
import "assets/vendor/quill/dist/quill.core.css";
import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/@fortawesome/fontawesome-free/css/all.min.css";
// core styles
import "assets/scss/argon-dashboard-pro-react.scss?v1.1.0";

const AdminLayout = lazy(() => import("layouts/Admin.js"));
const AuthLayout = lazy(() => import("layouts/Auth.js"));
const MyLayout = lazy(() => import("layouts/My.js"));
const IndexView = lazy(() => import("views/Index.js"));

ReactDOM.render(
  <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path="/admin" render={props => <AdminLayout {...props} />} />
        <Route path="/auth" render={props => <AuthLayout {...props} />} />
        <Route path="/my" render={props => <MyLayout {...props} />} />
        <Route path="/" render={props => <IndexView {...props} />} />
        <Redirect from="*" to="/" />
      </Switch>
    </Suspense>
  </BrowserRouter>,
  document.getElementById("root")
);
