import React, { Component, Suspense } from 'react';

import Lazy from './lazy';

class App extends Component {
  public render() {
    return (
      <div className="App">
        <Suspense fallback={<div>Loading...</div>}>
          <Lazy.Products />
        </Suspense>
      </div>
    );
  }
}

export default App;
