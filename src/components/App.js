import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginPage from "./login";
import RegisterPage from "./register";
import ContactsPage from "./contacts";
import ContactDetailsPage from "./contact-details";
import ContactCreatePage from "./contact-create";
import ContactProvider from "../contexts/providers/ContactProvider";
import AuthProvider from "../contexts/providers/AuthProvider";
import ContactContext from "../contexts/ContactContext";
import { PrivateRoute } from "../utils/PrivateRoute";

const App = () => {
  return (
    <div>
      <AuthProvider>
        <ContactProvider>
          <Switch>
            <Route exact path="/" component={ContactsPage} />
            <Route path="/contacts/add" component={ContactCreatePage} />
            <Route
              exact
              path="/contacts/:index"
              component={ContactDetailsPage}
            />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/register" component={RegisterPage} />
          </Switch>
        </ContactProvider>
      </AuthProvider>
    </div>
  );
};

export default App;
