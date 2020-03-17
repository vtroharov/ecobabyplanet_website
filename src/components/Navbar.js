import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';
import { ButtonContainer } from './Button';

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-light px-sm-5">
                <Link to='/'>
                    <img src={logo} alt="store" className="navbar-header" />
                </Link>
                <ul className="navbar-nav">
                    <li className="nav-item ml-5 mr-3">
                        <Link to='/' className='nav-link'>
                            home
                        </Link>
                    </li>
                    <li className="nav-item ml-3 mr-3">
                        <Link to='/' className='nav-link'>
                            about us
                        </Link>
                    </li>
                    <li className="nav-item ml-3 mr-3">
                        <Link to='/' className='nav-link'>
                            shop
                        </Link>
                    </li>
                    <li className="nav-item ml-3 mr-3">
                        <Link to='/' className='nav-link'>
                            contact
                        </Link>
                    </li>
                    <li className="nav-item ml-3 mr-3">
                        <Link to='/' className='nav-link'>
                            blog
                        </Link>
                    </li>
                </ul>
                <Link to='/cart' className="ml-auto">
                    <ButtonContainer>
                        <span className="mr-3">
                            <i className="fas fa-cart-plus"></i>
                        </span>
                        My Cart
                    </ButtonContainer>
                </Link>
            </NavWrapper>
        );
    }
}

const NavWrapper = styled.nav`
    background: var(--lightWhite);
    .nav-link {
        color: var(--mainGrey) !important;
        font-size: 1.2rem;
        text-transform: capitalize;
    }
`;