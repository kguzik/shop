import React from 'react';
import './App.css';
import Products from './components/Products';
import Home from './components/Home';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <main>
        <Router>
            <Route path="/" exact component={Home}/>
            <Route path="/products" exact component={Products}/>
        </Router>
      </main>
    </>
  );
}

export default App;
