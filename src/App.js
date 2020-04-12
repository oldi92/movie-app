import React from 'react';

import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home'
import './App.css';

function App() {
  return (
    <div className="App">
      <Layout>
        <Home />
      </Layout>
    </div>
  );
}

export default App;
