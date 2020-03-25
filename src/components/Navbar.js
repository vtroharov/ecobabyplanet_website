import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/Logo_dark.png';
import styled from 'styled-components';
import { ButtonContainer } from './Button';

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-md navbar-light">
                <button className="navbar-toggler mr-5" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link to='/'>
                    <img src={logo} alt="home" width="160" height="80" className="navbar-header" />
                </Link>
                <div className="collapse navbar-collapse" id="navbarToggler">
                    <ul className="nav navbar-nav">    
                        <li className="nav-item active">
                            <Link to='/home' className='nav-link'>
                                home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/about_us' className='nav-link'>
                                about us
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/shop' className='nav-link'>
                                shop
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/contact' className='nav-link'>
                                contact
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/blog' className='nav-link'>
                                blog
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/cart' className='nav-link'>
                                {/* <ButtonContainer> */}
                                    <span className="myCart mr-2">
                                        <i className="fas fa-cart-plus"></i> my cart
                                    </span>
                                {/* </ButtonContainer> */}
                            </Link>
                        </li>
                    </ul>
                </div>
            </NavWrapper>




            
        );
    }
}

const NavWrapper = styled.nav`
    background: var(--lightWhite);
    position: relative;
    top: 0;
    width: 100%;
    .navbar-header {
        margin-right: 20px;
    }
    .nav {
        margin-left: 20px;
        margin-top: 25px;
        width: 100%;
    }
    .nav-item {
        width: 16.66667%;
    }
    .nav-link {
        width: 100%;
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
