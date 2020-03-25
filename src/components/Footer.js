import React, { Component } from 'react'
import logo from '../img/Logo.png';
import styled from 'styled-components';
import { ButtonContainer } from './Button';

export default class Footer extends Component {
    render() {
        return (
            <Bottom>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-6 text-left">
                            <img src={logo} width="120" height="60" alt="Logo" /> 
                        </div>
                        <div className="col-6 text-right">
                            <p className="text-uppercase">FB/Insta</p>
                        </div>
                    </div> 
                    <div className="row mt-3">
                        <div className="col-4">
                            <p className="text-uppercase">About Us</p>
                            <p className="text-justify">Eco Baby Planet is an Australian brand creating unique and modern eco-friendly products for babies and young children.<br/>​​​​​​​Founded in 2018, Eco Baby Planet started out of a desire for beautiful and high quality baby products, cherished and loved by new parents everywhere.</p>
                        </div>
                        <div className="col-4 text-center">
                            <p className="text-uppercase">Contact Us</p>
                            <p>info@ecobabyplanet.com</p>
                        </div>
                        <div className="col-4">
                            <p className="text-uppercase">What's up with Eco Baby Planet</p>
                            <p className="text-justify">Get exclusive discounts, blog posts and product launches. No spam, ever.</p>
                            <form>
                                <div className="form-group mx-auto">
                                    <input type="name" className="form-control" id="inputName" placeholder="First Name" />
                                </div>
                                <div className="form-group  mx-auto">
                                    <input type="email" className="form-control" id="inputEmail" placeholder="Email" />
                                </div>
                                <div className="form-group mx-auto">
                                    <ButtonContainer type="submit" className="btn btn-default">Submit</ButtonContainer>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="row">
                        <div className="mx-auto">
                            <p>Copyright © 2019 Eco Baby Planet. All rights reserved.</p>
                        </div>                    
                    </div> 
                </div>
            </Bottom>
        )
    }
}

const Bottom = styled.div`
    background: var(--darkGrey);
    color: var(--mainWhite);
    padding: 10px;
    font-size: 0.8rem;
    font-style: Italic;
    .btn {
        width: 100%;
    }
`;

