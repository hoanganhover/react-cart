import React, { Component } from 'react';
//import CartItem from './CartItem';
//import CartResult from './CartResult';

class Cart extends Component {
    render() {
        var {children} =this.props;
        return (
            <section className="section">
                <div className="table-responsive">
                    <table className="table product-table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name Prouct</th>
                                <th>Price</th>
                                <th>Number</th>
                                <th>Total</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {children}
                        </tbody>
                    </table>
                </div>
            </section>

        );
    }
}

export default Cart;
