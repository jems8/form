import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";

import CreateEmployeePage from "./pages/EmployeePage/CreateEmployeePage";
import EditUsersPage from "./pages/EmployeePage/EditEmployeePage";
import ListUsersPage from "./pages/EmployeePage/ListEmployeePage";
import DashboardPage from "./pages/dashboard/DashboardPage";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact element={<DashboardPage />} />
        <Route path="/users" element={<ListUsersPage />} />
        <Route path="/users/create" exact element={<CreateEmployeePage />} />
        <Route path="/users/edit/:user_id" exact element={<EditUsersPage />} />
      </Switch>
    </Router>
  );
};

export default Routes;
