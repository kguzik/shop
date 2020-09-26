import React from 'react';
import './App.css';
import Products from './components/Products';
import Home from './components/Home';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/Header';

const shopName = 'online shop';

function App() {
  return (
    <>
    <Header shopName={shopName}/>
      <main>
        <Router>
            <Route path="/" exact render={(props) => (<Home {...props} title="Welcome!" linkText="See products"/>)}/>
            <Route path="/products" exact component={Products}/>
        </Router>
      </main>
    </>
  );
}

export default App;
