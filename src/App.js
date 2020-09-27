import React from 'react';
import './App.scss';
import Products from './components/products/Products';
import Home from './components/home/Home';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Details from './components/products/Details';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#000'
    }
  },
  typography: {
    h2: {
      fontSize: 22
    }
  },
});

const shopName = 'online shop';

function App() {
  return (
    <>
      <MuiThemeProvider theme={theme}>
        <Router basename='/shop'>
          <Header shopName={shopName}/>
            <main>
              <Route path="/" exact render={(props) => (<Home {...props} title="Choose the perfect outfit." subtitle="Find the most fashionable clothes and accessories in online shop! New products every day. Choose a style and buy without leaving home!"/>)}/>
              <Route path="/:category" exact component={Products}/>
              <Route path="/:category/:id" exact component={Details}/>
            </main>
          <Footer info="This page doesn't offer any real products."/>
        </Router>
      </MuiThemeProvider>
    </>
  );
}

export default App;
