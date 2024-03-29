import React from 'react';
import { Link } from 'react-router-dom';
import PaypalButton from './PaypalButton';
import styled from 'styled-components';

export default function CartTotals({value, history}) {
    // const{cartSubTotal, cartTax, cartTotal, clearCart} = value;
    const{cartTotal, clearCart} = value;
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-12 mt-2 ml-md-auto text-center text-md-right">
                        <Link to="/">
                            <button 
                                className="btn btn-outline-danger text-uppercase mb-3 px-5" 
                                type="button"
                                onClick={() => clearCart()}
                            >
                                    clear cart
                            </button>
                        </Link>
                        {/* <h5>
                            <span className="text-title">subtotal: </span>
                            <strong>$ {cartSubTotal}</strong>
                        </h5>
                        <h5>
                            <span className="text-title">tax: </span>
                            <strong>$ {cartTax}</strong>
                        </h5> */}
                        <h5>
                            <span className="text-title">total: </span>
                            <strong>$ {+(cartTotal.toFixed(2))}</strong>
                        </h5>
                        <PaypalButton
                            totalAmount = {cartTotal}
                            clearCart = {clearCart}
                            history = {history}
                        />
                        <Policies className="policies my-2">View <a href="https://www.paypal.com/au/webapps/mpp/ua/legalhub-full?locale.x=en_AU" target="_blank" rel="noopener noreferrer">PayPal policies</a> and your payment methods rights.</Policies>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

const Policies = styled.div`
    font-size: 10px;
`;