import "@progress/kendo-theme-default/dist/all.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

import Table1 from "./Table1";
import Table2 from "./Table2";
import Table3 from "./Table3";

function Group1() {
  return (
    <div className="flex__mid-container direction--column filter-margin">
      <Table1 />
    </div>
  );
}

function Group2() {
  return (
    <div className="flex__mid-container direction--column filter-margin">
      <Table2 />
    </div>
  );
}

function Group3() {
  return (
    <div className="flex__mid-container direction--column filter-margin">
      <Table3 />
    </div>
  );
}

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={(props) => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

const routes = [
  {
    path: "/start",
    component: start,
  },
  {
    path: "/alert",
    component: alert,
  },
  {
    path: "/misc",
    component: misc,
  },
];

function start() {
  return <Group1 />;
}

function alert() {
  return <Group2 />;
}

function misc() {
  return <Group3 />;
}

const Dashboard = ({ setIsAuthenticated }) => {
  
  return (
    <div className="flex__mid-container direction--column">
      <Router>
        <ul className="horizontal-inline-flex bottom-row">
          <li className="disc">
            <NavLink to="/start" activeClassName="active">
              1
            </NavLink>
          </li>
          <li className="disc">
            <NavLink to="/alert" activeClassName="active">
              2
            </NavLink>
          </li>
          <li className="disc">
            <NavLink to="/misc" activeClassName="active">
              3
            </NavLink>
          </li>
        </ul>
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </Router>
    </div>
  );
};

export default Dashboard;
