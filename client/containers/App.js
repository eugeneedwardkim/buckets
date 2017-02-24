import React from 'react';
import Nav from '../components/Nav';
import Buckets from '../components/buckets/Buckets';

const App = () => (
  <div>
    <Nav />
    <div className="container">
      <Buckets />
    </div>
  </div>
);

export default App;
