import React, { Component, Suspense } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Header from './components/header';
import Lazy from './lazy';

class App extends Component {
  public render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route path="/products">
                <Lazy.Products />
              </Route>
              <Redirect exact={true} from="/" to="/products" />
            </Switch>
          </Suspense>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
