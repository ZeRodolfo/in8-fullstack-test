/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { LastLocationProvider } from "react-router-last-location";

import Frame from "./frame";

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
                component={() => (
                  <>
                    <h1>Hello World!!</h1>
                    <h2>Teste</h2>
                    <h3>Teste</h3>
                    <h4>Teste</h4>
                  </>
                )}
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
