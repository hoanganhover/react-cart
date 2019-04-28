import React, { Component } from 'react';
import Header from './components/Header';
//import Products from './components/Products';
import ProductContainer from './containers/ProductContainer';
import CartContainer from './containers/CartContainer';
import MessageContainer from './containers/MessageContainer';
//import Message from './components/Message';
//import Cart from './components/Cart';
import Footer from './components/Footer';




class App extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <main id="mainContainer">
                    <div className="container">
                        <ProductContainer></ProductContainer>    
                        <MessageContainer></MessageContainer>
                        <CartContainer></CartContainer>
                    </div>
                </main>
                <Footer></Footer>
            </div>
        );
    }
}

export default App;
