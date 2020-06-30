/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { LastLocationProvider } from "react-router-last-location";

import Frame from "./frame";

import Home from "../pages/home";

function Routes({ history }) {
  return (
    <BrowserRouter>
      <LastLocationProvider>
        <Frame history={history}>
          <ConnectedRouter history={history}>
            <Switch>
              <Route
                exact
                path="/"
                history={history}
                component={Home}
              />
            </Switch>
          </ConnectedRouter>
        </Frame>
      </LastLocationProvider>
    </BrowserRouter>
  );
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(Routes);
