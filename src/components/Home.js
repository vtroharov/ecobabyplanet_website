import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ButtonContainer } from './Button';
import banner from '../img/banner_home.jpg';
import shop from '../img/shop.png';
import blog from '../img/blog.png';
import vip from '../img/vip_program.png';
import product from '../img/milestone_blanket.png';

export default class Home extends Component {
    render() {
        return (
            <Main className="container-fluid">
                <div className="row">
                    <BannerImage>
                        <img src={banner} alt="banner" className="bg" />
                    </BannerImage>
                    <Text className="flexbox">
                        <h5 className="text-title">Passionate about</h5>
                        <h5 className="text-sub">Babies and Toddlers</h5>
                        <h5 className="text">Let Us Love You a Little More Before</h5>
                        <h5 className="text">You're Not Little Anymore...</h5>
                    </Text>
                </div>
                <Links className="row my-3">
                    <Link to='/au_shop' className="col-md-4 mx-auto nav-link">
                            <img src={shop} alt="shop" className="bg" />
                    </Link>
                    <Link to='/vip' className="col-md-4 mx-auto nav-link">
                        <img src={vip} alt="vip" className="bg" />
                    </Link>
                    <Link to='/construct' className="col-md-4 mx-auto nav-link">
                        <img src={blog} alt="blog" className="bg" />
                    </Link>
                </Links>
                <div className="row my-3">
                    <Desc className="col-md-7 mx-auto">
                            <p className="text-title">Introducing...</p>
                            <p className="text-sub">Our New Milestone blanket and Cards Set</p>
                            <p className="text text-justify">Make those special moments last forever with our 'Baby Milestone Blanket and Cards Set'.
                            <br/><br/>Your baby will love laying on this mat to record their special milestones as the gorgeous wooden circle and arrow highlight and point to proud ages and dates. Family and friends will love seeing your little ones achievements - time is precious so take lots of lovely photos!
                            <br/><br/>Lay the stylish white mat on the floor and use the beautiful wooden ring to mark the month of your baby's age. Use the beautiful cards to complement your shot and share your awesome picture on your social media and with your family!
                            ​​​​<br/><br/>This is a perfect new born gift, mother to be gift or baby shower gift. 
                            </p>
                            <Link to='/au_shop'>
                                <ButtonContainer>
                                    <span className="mx-4">
                                        Shop Now
                                    </span>
                                </ButtonContainer>
                            </Link>
                    </Desc>
                    <BannerImage className="col-md-4 py-3 mx-auto">
                        <img src={product} alt="product" className="bg" />
                    </BannerImage>
                </div>
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
    margin-top: 10vw;
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
    .text-sub {
        text-style: bold;
        margin-bottom: 6vw;
        font-size: 2vw;
        @media (max-width: 768px) {
            text-style: bold;
            margin-bottom: 6vw;
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
const Desc = styled.div`
    color: var(--mainGrey);
    .text-title { 
        font-size: 1.5rem; 
    }
    .text-sub {
        text-style: bold;
        font-size: 1.5rem;
    }
    .text { 
        font-size: 0.7rem; 
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
const Links = styled.div`
    background: var(--darkWhite);
    .bg {
        padding: 20px;
        width: 100%;
        transition: all 0.5s linear;
        &:hover {
            opacity: 0.5;
            transition:all 0.5s ease-in-out;
            transform: scale(1.1);
        }
    }
    @media (max-width: 768px) {
        padding-left: 40px;
        padding-right: 40px;
    }
`;



 