import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import Modal from './components/Modal';
import AboutUs from './components/AboutUs';
import Home from './components/Home';
import Contact from './components/Contact';
import Blog from './components/Blog/Blog';
import Post from './components/Blog/Post';

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
          <Route path="/about_us" component={AboutUs} />
          <Route path="/shop" component={ProductList} />
          <Route path="/contact" component={Contact} />
          <Route path="/blog/:postId" component={Post} />
          <Route path="/blog" component={Blog} />
          <Route component= {Default} />
        </Switch>
        <Footer />
        <Modal />
      </React.Fragment>
    );
  }
}
export default App;
