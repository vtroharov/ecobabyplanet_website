import React, { Component } from 'react';
import styled from 'styled-components';
import { ButtonContainer } from './Button';
import banner from '../img/banner_contact.jpg';

import * as emailjs from 'emailjs-com'
import { Form, FormGroup, Input } from 'reactstrap'


export default class Contact extends Component {

    state = {
        user_name: '',
        user_email: '',
        subject: 'Contact Form',
        message: '',
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
          subject: 'Contact Form',
          message: '',
        })
      }
    handleChange = (param, e) => {
        this.setState({ [param]: e.target.value })
      }

    render() {
        return (
            <Main className="container-fluid">
                <div className="row">
                    <BannerImage>
                        <img src={banner} alt="banner" className="bg" />
                    </BannerImage>
                    <Text className="flexbox">
                        <h5 className="text-title">Contact Us</h5>
                        <h5 className="text">We are Social Butterflies and we love
                        <br/>receiving messages!
                        </h5>
                    </Text>
                </div>
                <CForm>
                    <Form className="row" onSubmit={this.handleSubmit.bind(this)}>
                        <div className="heading col-md-8 mx-auto text-center text-muted my-4">Have a question, comment, or just want to say hello? Don't be shy! Just fill out the form, or email us at contact@ecobabyplanet.com and we'll be in touch in 1-2 business days.
                        </div>
                        <FormGroup className="col-md-8 mx-auto" controlid="formBasicName">
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
                        <FormGroup className="col-md-8 mx-auto" controlid="formBasicEmail">
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
                        <FormGroup className="col-md-8 mx-auto" controlid="formBasicMessage">
                            <Input
                                type="textarea"
                                name="message"
                                className="text-primary"
                                value={this.state.message}
                                onChange={this.handleChange.bind(this, 'message')}
                                placeholder="Your Message"
                                required
                            />
                        </FormGroup>
                        <Input type="hidden" name="subject" value={this.state.subject} />
                        <FormGroup className="col-md-8 mx-auto">
                            <ButtonContainer type="submit" disabled={!this.state.user_email} variant="primary" className="btn btn-default px-5">Send</ButtonContainer>
                        </FormGroup>
                    </Form>
                </CForm>
            </Main>
        );
    }
}

const Main = styled.div`
    margin-top: 75px;
`;
const Text = styled.div`
    position: absolute; 
    color: var(--mainGrey);
    margin-top: 9vw;
    left: 20px;
    .flexbox { 
        display: flex;
        margin: 5%;
    }
    .text-title { 
        font-size: 2vw;
        @media (max-width: 768px) {
            font-size: 4vw;
        } 
    }
    .text { 
        font-size: 1.5vw;
        @media (max-width: 768px) {
            font-size: 3vw;
        } 
    }
    @media (max-width: 768px) {
        margin-top: 5vw;
    } 
`;
const BannerImage = styled.div`
    width: 100%;
    .bg {
        width: 100%; 
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
`;
const CForm = styled.div`
    display: flex;
    background: var(--darkWhite);
    padding: 20px;
    .heading {
        text-align: center;
        font-size: 0.7rem;
    }
    .btn {
        width: 100%;
    }
`;

