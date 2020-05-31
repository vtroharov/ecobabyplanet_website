import React, { Component } from 'react';
import styled from 'styled-components';
import banner from '../img/construct.png';

export default class Construct extends Component {
    render() {
        return (
            <Main className="container-fluid">
                <div className="row">
                    <BannerImage>
                        <img src={banner} alt="banner" className="bg" />
                    </BannerImage>
                </div>
            </Main>
        );
    }
}

const Main = styled.div`
    margin-top: 75px;
`;

const BannerImage = styled.div`
    width: 100%;
    padding: 30px;
    .bg {
        width: 100%; 
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
`;

