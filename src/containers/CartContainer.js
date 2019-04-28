import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from  'prop-types';
import Cart from './../components/Cart';
import * as Message from './../constants/Message';
import CartItem from './../components/CartItem';
import CartResult from './../components/CartResult';
import {accRemoveCart,accChangeMessage,accUpdateProductCart} from './../actions/index';


class CartContainer extends Component {
    render() {
        var {cart} = this.props;
        //console.log(cart);
        return (
            <Cart>
                {this.showCartItem(cart)}
                {this.showTotalAmount(cart)}
            </Cart>
        );
    }
    showCartItem = (cart) =>{
        var {onDeleteCart,onChangeMessage,onUpdateProductCart} = this.props;
        var result = <tr><td>{Message.MSG_CART_EMPTY}</td></tr>;
        if(cart.length > 0){
            result = cart.map((item,index) => {
                return(
                    <CartItem 
                        key={index}
                        item = {item}
                        index = {index}
                        onDeleteCart = {onDeleteCart}
                        onChangeMessage = {onChangeMessage}
                        onUpdateProductCart = {onUpdateProductCart}
                        >
                    </CartItem>
                );
            });
        }
        return result;
    }
    showTotalAmount = (cart) =>{
        var result = null;
        if(cart.length > 0){
            result = <CartResult cart = {cart}></CartResult>
        }
        return result;
    }
}

CartContainer.propTypes ={
    cart : PropTypes.arrayOf(PropTypes.shape({
        product : PropTypes.shape({
            id :PropTypes.number.isRequired,
            name:PropTypes.string.isRequired,
            description :PropTypes.string.isRequired,
            price:PropTypes.number.isRequired,
            inventory:PropTypes.number.isRequired,
            rating:PropTypes.number.isRequired
        }).isRequired,
        quantity : PropTypes.number.isRequired
    })).isRequired,
    onChangeMessage:PropTypes.func.isRequired,
    onDeleteCart:PropTypes.func.isRequired,
    onUpdateProductCart:PropTypes.func.isRequired,
}

const mapStateToProps = state => {
    return {
        cart : state.cart
    }
}

const mapDispatchToProps = (dispatch,props) =>{
    return{
        onDeleteCart : (product) =>{
            dispatch(accRemoveCart(product));
        },
        onChangeMessage : (message) =>{
            dispatch(accChangeMessage(message));
        },
        onUpdateProductCart : (product,quantity) =>{
            dispatch(accUpdateProductCart(product,quantity));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (CartContainer);
