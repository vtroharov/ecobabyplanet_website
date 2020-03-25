import React, { Component } from 'react';
import styled from 'styled-components';
import { ButtonContainer } from './Button';
import banner from '../img/banner_contact.jpg';

export default class AboutUs extends Component {
    render() {
        return (
            <div className="container-fluid">
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
                <Desc className="text-center text-muted my-4">Have a question, comment, or just want to say hello? Don't be shy! Just fill out the form,
                    <br/>or email us at contact@ecobabyplanet.com and we'll be in touch in 1-2 business days.
                </Desc>
                <CForm className="row">
                    <div className="form-group col-8 mx-auto">
                        <input type="name" className="form-control" id="inputName" placeholder="First Name" />
                    </div>
                    <div className="form-group col-8 mx-auto">
                        <input type="email" className="form-control" id="inputEmail" placeholder="Email" />
                    </div>
                    <div className="form-group col-8 mx-auto">
                        <textarea type="message" className="form-control" id="inputMessage" placeholder="Message" rows="4" />
                    </div>
                    <div className="form-group col-8 mx-auto">
                        <ButtonContainer type="submit" className="btn btn-default px-5">Send</ButtonContainer>
                    </div>                    
                </CForm>
            </div>
        );
    }
}
 
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
    }
    .text { 
        font-size: 1.5vw; 
    }
`;
const Desc = styled.div`
    font-size: 0.7rem;
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
    .btn {
        width: 100%;
    }
`;

