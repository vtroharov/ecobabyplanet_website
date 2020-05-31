import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/Logo_dark.png';
//import face from '../img/icons/face_6.png';
//import insta from '../img/icons/insta_6.png';
import styled from 'styled-components';
//import { ButtonContainer } from './Button';

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-md navbar-light">
                <button className="navbar-toggler mr-5" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link to='/'>
                    <img src={logo} alt="home" width="120" height="60" className="navbar-header" />
                </Link>
                <div className="collapse navbar-collapse" id="navbarToggler">
                    <ul className="nav navbar-nav">    
                        <li className="nav-item active" data-toggle="collapse" data-target=".navbar-collapse.show">
                            <Link to='/home' className='nav-link'>
                                home
                            </Link>
                        </li>
                        <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                            <Link to='/about_us' className='nav-link'>
                                about us
                            </Link>
                        </li>
                        <li class="nav-item dropdown" data-toggle="collapse" data-target=".navbar-collapse.show">
                            <a class="nav-link dropdown-tog" data-toggle="dropdown">shop</a>
                            <ul class="dropdown-menu pl-3">
                                <li>
                                    <Link to='/us_shop' className='nav-link'>
                                        US Shop
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/au_shop' className='nav-link'>
                                        AU Shop
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                            <Link to='/contact' className='nav-link'>
                                contact
                            </Link>
                        </li>
                        <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                            <Link to='/construct' className='nav-link'>
                                blog
                            </Link>
                        </li>
                        <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                            <Link to='/cart' className='nav-link'>
                                {/* <ButtonContainer> */}
                                    <span className="myCart mr-2">
                                        <i className="fas fa-cart-plus"></i> my cart
                                    </span>
                                {/* </ButtonContainer> */}
                            </Link>
                        </li>
                        {/* <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
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
                        </li> */}
                    </ul>
                </div>
            </NavWrapper>




            
        );
    }
}

const NavWrapper = styled.nav`
    background: var(--lightWhite);
    position: absolute;
    z-index: 9999;
    top: 0;
    width: 100%;
    margin-bottom: 0px !important;
    padding-bottom: 0px !important;
    .navbar-header {
        margin-right: 20px;
    }
    .nav {
        margin-left: 20px;
        margin-top: 25px;
        width: 100%;
    }
    .nav-item {
        margin-top: 0px;
        text-align: center;
        width: 16.66667%;
        //width: 14.2857%;
        @media (max-width: 768px) {
            text-align: left;
        }
        cursor: pointer;
    }
    .nav-link {
        width: 100%;
        white-space: nowrap;
        color: var(--mainGrey) !important;
        font-size: 1.2rem;
        text-transform: capitalize;
        &:hover {
            color: var(--darkGrey) !important;
        }
    }
    .myCart {
        white-space: nowrap;
        overflow: hidden;
    }
`;
