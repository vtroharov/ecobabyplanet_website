import React, { Component } from 'react';
import styled from 'styled-components';
import banner from '../img/banner_vip.jpg';
import desc_vip from '../img/description_vip.jpg';
import { ButtonContainer } from './Button';

import * as emailjs from 'emailjs-com'
import { Form, FormGroup, Input } from 'reactstrap'

export default class Home extends Component {

    state = {
        user_fname: '',
        user_lname: '',
        user_email: '',
        country: '',
        state: '',
        subject: 'VIP Form',
      }
    handleSubmit(e) {
        e.preventDefault()
        emailjs.sendForm('eco_baby_planet_email', 'vip', e.target, 'user_MMHEDpDLUSmg9S4RGI7DL')
        this.resetForm()
     }
    resetForm() {
        this.setState({
            user_fname: '',
            user_lname: '',
            user_email: '',
            country: '',
            state: '',
            subject: 'VIP Form',
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
                        <h5 className="text-title">Become a VIP</h5>
                        <h5 className="text">And get access to privileges and exclusivities</h5>
                    </Text>
                </div>
                <Benefits>
                    <img src={desc_vip} alt="description" className="bg1"/>
                    <div className="row">
                        <div className="text_f col-5 mx-auto">
                            <p className="text-muted">Free to Join</p>
                            <Desc className="text-muted text-justify">Our Eco Baby Program is free to join. All you need is to register by filling in the form below.
                            <br/>You'll become a member of our Community and you'll be able to enjoy right away all the advantages that come with it!
                            </Desc>
                        </div>
                        <div className="text_f col-5 mx-auto">
                            <p className="text-muted">VIP Program Benefits</p>
                            <Desc className="text-muted text-justify">So, what do I get?
                            <br/><br/>
                            <ul>
                                <li>Early access to new products and sales</li>
                                <li>Exclusive discounts for our VIPs only</li>
                                <li>Access to special campaigns such as product launch<br/>and product testing</li>
                            </ul>
                            </Desc>
                        </div>
                    </div>
                    <div className="text_f row my-3">
                        <div className="col-5 mx-auto">
                            <p className="text-muted">Competitions</p>
                            <Desc className="text-muted text-justify ">We'll be running several contests and competitions yearly with amazing prizes to win!
                            <br/>Our members will be first informed and will have their own exclusive competitions as well. Stay tuned! 
                            </Desc>
                        </div>
                    </div>
                    <img src={desc_vip} alt="description" className="bg2 mx-auto"/>
                </Benefits>
                <CForm>
                    <Form className="row" onSubmit={this.handleSubmit.bind(this)}>
                        <div className="heading col-md-8 mx-auto text-center text-muted my-4">Since we launched our VIP Program, we're proud to say that we welcomed many members joining our Community. Enter your details below and join this group of brilliant human beings!
                        </div>
                        <FormGroup className="col-md-8 mx-auto" controlId="formBasicName">
                            <Input
                                type="text"
                                name="user_fname"
                                value={this.state.user_fname}
                                className="text-primary"
                                onChange={this.handleChange.bind(this, 'user_fname')}
                                placeholder="First Name"
                            />
                        </FormGroup>
                        <FormGroup className="col-md-8 mx-auto" controlId="formBasicName">
                            <Input
                                type="text"
                                name="user_lname"
                                value={this.state.user_lname}
                                className="text-primary"
                                onChange={this.handleChange.bind(this, 'user_lname')}
                                placeholder="Last Name"
                            />
                        </FormGroup>
                        <FormGroup className="col-md-8 mx-auto" controlId="formBasicEmail">
                            <Input
                                type="email"
                                name="user_email"
                                value={this.state.user_email}
                                className="text-primary"
                                onChange={this.handleChange.bind(this, 'user_email')}
                                placeholder="Your Email"
                            />
                        </FormGroup>
                        <FormGroup className="col-md-8 mx-auto" controlId="formBasicName">
                            <Input
                                type="text"
                                name="country"
                                value={this.state.country}
                                className="text-primary"
                                onChange={this.handleChange.bind(this, 'country')}
                                placeholder="Country"
                            />
                        </FormGroup>
                        <FormGroup className="col-md-8 mx-auto" controlId="formBasicName">
                            <Input
                                type="text"
                                name="state"
                                value={this.state.state}
                                className="text-primary"
                                onChange={this.handleChange.bind(this, 'state')}
                                placeholder="State"
                            />
                        </FormGroup>
                        <Input type="hidden" name="subject" value={this.state.subject} />
                        <FormGroup className="col-md-8 mx-auto">
                            <ButtonContainer type="submit" disabled={!this.state.user_email} variant="primary" className="btn btn-default px-5">Join Us</ButtonContainer>
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
    margin-top: 13vw;
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
`;
const Benefits = styled.div`
    margin-top: 15px;
    background: var(--lightWhite);
    position: relative;
    .bg1 {
        height: 100%;
        right: 0%;
        position: absolute;
        filter: brightness(110%);
        @media (max-width: 768px) {
            display: none;
        }
    }
    .bg2 {
        width: 100%;
        padding-left: 60px;
        padding-right: 60px;
        position: relative;
        filter: brightness(110%);
        margin-bottom: 10px;
        @media (min-width: 768px) {
            display: none;
        }
    }
    .text_f {
        margin-top: 20px;
        position: relative;
    }
`;
const Desc = styled.p`
    font-size: 0.7rem;
    font-style: italic;
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

