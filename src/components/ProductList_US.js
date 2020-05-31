import React, { Component } from 'react';
import styled from 'styled-components';
import banner from '../img/banner_shop.jpg';
import blanket from '../img/milestone_blanket.png';
import cards from '../img/milestone_cards.jpg';
import { ButtonContainer } from './Button';

export default class ProductList_US extends Component {
    render() {
        return (
            <Main className="container-fluid">
                <div className="row">
                    <BannerImage>
                        <img src={banner} alt="banner" className="bg" />
                    </BannerImage>
                    <Text className="flexbox">
                        <h5 className="text-title">Discover our Range of Products</h5>
                        <h5 className="text">We dream it, and then we make it, reinventing what's possible...</h5>
                    </Text>
                </div>
                <Product1 className="row">
                    <div className="mx-auto">
                        <img src={blanket} alt="blanket" className="bg1"/>
                    </div>
                    <div className="col-md-7">
                        <p className="text-muted mt-2">Milestone Blanket & Cards Set</p>
                        <Desc className="text-muted text-justify">Buy Now on Amazon for FREE Shipping
                            <br/><br/>Memories of your precious newborn are so special. You can use this Milestone Blanket to track your babies growth and reflect on the memories of your bundle of joy forever. Its the perfect alternative to monthly stickers and blocks.
                            <br/><br/>Our neutral gender baby giraffe blanket will be a cherished keepsake for you. Swaddle and comfort your adorable new baby with this soft, luxurious blanket. Your cozy blanket will make your job as a new mom easier, letting you soothe and quiet your baby, or even just cuddle up for story time. Best of all, your blanket comes with a wooden month marker and our beautiful and funny Baby Cards Set! 
                            <br/><br/>Our Milstone Blanket and Cards Set would also make a great baby shower gift for a new mom to be. ​​​​​​​
                            <br/><br/>Our Bundle includes:
                            <ul>
                                <li>Milestone blanket 40x40 in</li>
                                <li>Eco-Friendly wooden ring marker</li>
                                <li>Baby card set (24 designs)</li>
                                <li>Beautiful packaging ready to be gifted</li>
                            </ul>
                        </Desc>
                        <ButtonContainer className="mx-4" onClick={() => {
                            let win = window.open('')
                            win.location.replace('https://www.amazon.com/Eco-Baby-Planet-Milestone-Blanket/dp/B07RT3T958/ref=sr_1_1?dchild=1&keywords=Eco-Baby-Planet-Milestone&qid=1586474196&sr=8-1')
                        }} >Buy Now on Amazon for FREE Shipping
                        </ButtonContainer>
                    </div>
                    <div className="col-md-5">
                        <img src={blanket} alt="blanket" className="bg2"/>
                    </div>
                </Product1>
                <Product2 className="row">
                    <div className="col-md-5 mx-auto">
                        <img src={cards} alt="blanket" className="bg1"/>
                    </div>
                    <div className="col-md-7">
                        <p className="text-muted mt-2">Baby Milestone Baby Set</p>
                        <Desc className="text-muted text-justify">Document your baby's first year with these unique illustrated cards, a great way to capture special moments and achievements as they grow! 
                            <br/><br/>A new baby comes with a lot of milestones and memories - from their ​first word to their first birthday​. For a ​parent​, nothing is more important than remembering those moments forever.
                            <br/><br/>That’s why we are proud to offer this ​pack ​of 24 baby progress cards as a ​fun, creative​, and ​adorable ​way to record every cherished milestone! These ​infant-age memory cards feature sweet but also hilarious messages, presented with beautiful unique designs and a ​matte finish​. They are also comprised using ​extra-thick paper stock ​to ensure each card maintains its integrity.
                            <br/><br/>Because of their large size, our ​Baby’s First Cards​ really stand out in ​baby pictures. ​This ​child’s first year card set ​makes a unique ​gift for​ new parents ​and​ expecting mothers​, and are perfect ​baby shower presents​.
                            <br/><br/>
                        </Desc>
                        <ButtonContainer className="mx-4" onClick={() => {
                            let win = window.open('')
                            win.location.replace('https://www.amazon.com/Eco-Baby-Planet-Exclusively-Conventional/dp/B07RTQ85FV/ref=sr_1_3?keywords=milestone+cards+eco+baby+planet&qid=1563227965&s=gateway&sr=8-3')
                        }} >Buy Now on Amazon for FREE Shipping
                        </ButtonContainer>
                    </div>
                </Product2>
            </Main>
        );
    }
}

const Main = styled.div`
    margin-top: 75px;
`;
const Text = styled.div`
    position: absolute; 
    color: var(--mainWhite);
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
`;
const Desc = styled.div`
    font-size: 0.7rem;
    //font-style: italic;
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
const Product1 = styled.div`
    margin-top: 10px;
    padding-bottom: 20px;
    background: var(--lightWhite);
    .bg1 {
        padding: 30px;
        width: 100%; 
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        @media (min-width: 768px) {
            display: none;
        } 
    }
    .bg2 {
        padding: 30px;
        width: 100%; 
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        @media (max-width: 768px) {
            display: none;
        } 
    }
`;
const Product2 = styled.div`
    margin-top: 10px;
    padding-bottom: 20px;
    .bg1 {
        padding: 30px;
        width: 100%; 
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
`;

