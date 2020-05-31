import React, { Component } from 'react'
import logo from '../img/Logo.png';
import face from '../img/icons/face_6.png';
import insta from '../img/icons/insta_6.png';
import styled from 'styled-components';
import { ButtonContainer } from './Button';

import * as emailjs from 'emailjs-com'
import { Form, FormGroup, Input } from 'reactstrap'

export default class Footer extends Component {

    state = {
        user_name: '',
        user_email: '',
        subject: 'Subscribe Form',
        message: 'We want to subscribe to your mailing list',
      }
    handleSubmit(e) {
        e.preventDefault()
        emailjs.sendForm('eco_baby_planet_email', 'contact_us', e.target, 'user_MMHEDpDLUSmg9S4RGI7DL')
        this.resetForm()
     }
    resetForm() {
        this.setState({
          user_name: '',
          user_email: '',
          subject: 'Subscribe Form',
          message: 'We want to subscribe to your mailing list',
        })
      }
    handleChange = (param, e) => {
        this.setState({ [param]: e.target.value })
      }

    render() {
        return (
            <Bottom>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-6 text-left">
                            <img src={logo} width="120" height="60" alt="Logo" /> 
                        </div>
                        <div className="col-6 text-right">
                            <img src={face} alt="face" width="25" height="25" className="social" onClick={() => {
                                let win = window.open('')
                                win.location.replace('https://www.facebook.com/ecobabyplanet')
                            }}>
                            </img>
                            <img src={insta} alt="insta" width="25" height="25" className="social" onClick={() => {
                                let win = window.open('')
                                win.location.replace('https://www.instagram.com/ecobabyplanet/')
                            }}>
                            </img>
                        </div>
                    </div> 
                    <div className="row mt-3">
                        <div className="col-md-4">
                            <p className="text-uppercase">About Us</p>
                            <p className="text-justify">Eco Baby Planet is an Australian brand creating unique and modern eco-friendly products for babies and young children.<br/>​​​​​​​Founded in 2018, Eco Baby Planet started out of a desire for beautiful and high quality baby products, cherished and loved by new parents everywhere.</p>
                        </div>
                        <div className="fluid col-md-4 text-center">
                            <p className="text-uppercase">Contact Us</p>
                            <p>info@ecobabyplanet.com</p>
                        </div>
                        <div className="col-md-4">
                            <p className="text-uppercase">What's up with Eco Baby Planet</p>
                            <p className="text-justify">Get exclusive discounts, blog posts and product launches. No spam, ever.</p>
                            <Form onSubmit={this.handleSubmit.bind(this)}>
                                <FormGroup className="mx-auto" controlid="formBasicName">
                                    <Input
                                        type="text"
                                        name="user_name"
                                        value={this.state.user_name}
                                        className="text-primary"
                                        onChange={this.handleChange.bind(this, 'user_name')}
                                        placeholder="First Name"
                                        required
                                    />
                                </FormGroup>
                                <FormGroup className="mx-auto" controlid="formBasicEmail">
                                    <Input
                                        type="email"
                                        name="user_email"
                                        value={this.state.user_email}
                                        className="text-primary"
                                        onChange={this.handleChange.bind(this, 'user_email')}
                                        placeholder="Your Email"
                                        required
                                    />
                                </FormGroup>
                                <Input type="hidden" name="subject" value={this.state.subject} />
                                <Input type="hidden" name="message" value={this.state.message} />
                                <FormGroup className="mx-auto">
                                    <ButtonContainer type="submit" disabled={!this.state.user_email} variant="primary" className="btn btn-default">Submit</ButtonContainer>
                                </FormGroup>
                            </Form>
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
    //font-style: Italic;
    .btn {
        width: 100%;
    }
    .fluid {
        @media (max-width: 768px) {
            font-size: 1.2rem;
            margin: 10px;
        }
    }
    .social {
        cursor: pointer;
        margin-right: 6px;
    }
`;

