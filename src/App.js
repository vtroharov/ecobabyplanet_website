import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import ProductList_US from './components/ProductList_US';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import Modal from './components/Modal';
// import AboutUs from './components/AboutUs';
import VIP from './components/VIP';
import Home from './components/Home';
import Contact from './components/Contact';
/* import Blog from './components/Blog/Blog';
import Post from './components/Blog/Post'; */
import Construct from './components/Construct';
//import Test from './components/Test';

class App extends Component {
  render () {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route path="/home" component={Home} />
          {/* <Route path="/about_us" component={AboutUs} /> */}
          <Route path="/vip" component={VIP} />
          <Route path="/au_shop" component={ProductList} />
          <Route path="/us_shop" component={ProductList_US} />
          <Route path="/contact" component={Contact} />
{/*           <Route path="/blog/:postId" component={Post} />
          <Route path="/blog" component={Blog} /> */}
          <Route path="/construct" component={Construct} />
          {/* <Route path="/test" component={Test} /> */}
          <Route component= {Default} />
        </Switch>
        <Footer />
        <Modal />
      </React.Fragment>
    );
  }
}
export default App;
