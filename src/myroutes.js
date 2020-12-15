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
import Calendar from "views/pages/Calendar.js";
import Profile from "views/pages/examples/Profile.js";
import Dashboard from "views/pages/dashboards/Gophercon.js";

const routes = [

  {
    collapse: true,
    name: "My GopherCon",
    icon: "ni ni-ungroup text-orange",
    state: "examplesCollapse",
    views: [
      {
        path: "/gophercon",
        name: "Dashboard",
        miniName: "D",
        component: Dashboard,
        layout: "/my"
      },
      {
        path: "/calendar",
        name: "Calendar",
        miniName: "C",
        component: Calendar,
        layout: "/my"
      },
      {
        path: "/profile",
        name: "Profile",
        miniName: "P",
        component: Profile,
        layout: "/my"
      }
    ]
  },

];

export default routes;
