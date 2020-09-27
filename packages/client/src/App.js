import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

import Launch from "./components/Launch";
import Launches from "./components/Launches";

import services from "./services";

import "./styles/index.css";

const client = new ApolloClient({
  uri: services.endpoint,
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Launches} />
            <Route path="/launch/:flight_number" component={Launch} />
          </Switch>

          <h5 className="display-8 my-4 text-center">
            Developed by @gabrielmodog
          </h5>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
