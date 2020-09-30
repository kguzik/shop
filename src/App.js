import React, { useState } from 'react';
import './App.scss';
import Products from './components/products/Products';
import Home from './components/home/Home';
import { HashRouter, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Details from './components/products/Details';
import ShoppingCart from './components/shop/ShoppingCart';
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
  overrides: {
    MuiButton: {
      text: {
        background: 'linear-gradient(to right, #2C5364, #203A43, #0F2027)',
        borderRadius: 4,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
      },
    },
  },
});

const shopName = 'online shop';

function App() {

  const [cart, setCart] = useState([]);

  function addToCart(category, id, sku){
    setCart(items => {
      const itemInCart = items.find(item => sku === item.sku ); 
      if (itemInCart) {
        return items.map(item => item.sku === sku ? { ...item, quantity: item.quantity + 1 } : item )
      } else {
        return [...items, {category, id, sku, quantity: 1 }]
      }
    });
  }

  function updateQuantity(sku, quantity) {
    setCart(items => {
      return items.map(i => ( i.sku === sku ? {...i, quantity } : i ));
    });
  }

  function removeItem(sku) {
    setCart(items => {
      return items.filter(i => i.sku !== sku);
    });
  }

  return (
    <>
      <MuiThemeProvider theme={theme}>
        <HashRouter basename='/shop'>
          <Header shopName={shopName}/>
            <main>
              <Route path="/" exact render={(props) => (<Home {...props} title="Choose the perfect outfit." subtitle="Find the most fashionable clothes and accessories in online shop! New products every day. Choose a style and buy without leaving home!"/>)}/>
              <Route path="/products/:category" exact component={Products}/>
              <Route path="/products/:category/:id" exact render={(props) => (<Details {...props} addToCart={addToCart} />)}/>
              <Route path="/shopping-cart" exact render={(props) => (<ShoppingCart {...props} cart={cart} updateQuantity={updateQuantity} removeItem={removeItem}/>)}/>
            </main>
          <Footer info="This page doesn't offer any real products."/>
        </HashRouter>
      </MuiThemeProvider>
    </>
  );
}

export default App;
