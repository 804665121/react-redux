import React from 'react';

import { Son, Father } from './pages/index'


import { Provider } from 'react-redux'
import store from './store'

function App() {
  console.log(Son)
  return (
    <Provider className="App" store={store}>
      <Father></Father>
      <Son></Son>
    </Provider>
  );
}

export default App;
