import React, { Component } from 'react';
import styled from 'styled-components';
import banner from '../img/banner_about_us.png';

export default class AboutUs extends Component {
    render() {
        return (
            <Main className="container-fluid">
                <div className="row">
                    <BannerImage>
                        <img src={banner} alt="banner" className="bg" />
                    </BannerImage>
                    <Text className="flexbox">
                        <h5 className="text-title">Our Story</h5>
                        <h5 className="text">We are the hero of our own stories...</h5>
                    </Text>
                </div>
                <div className="row my-5">
                    <div className="col-md-5 mx-auto">
                        <h6 className="text-muted">Once Upon a Time...</h6><br/>
                        <Desc className="text-muted text-justify">Eco Baby Planet is the result of love and sleepless nights, coffee-gone-cold and dedication to a dream.
                        <br/><br/>Founded by French first-time mum Celine living in Sydney Australia, Eco Baby Planet was created out of a desire for unique and beautiful products, made with care and awareness. But not only.
                        <br/><br/>Being an isolated mum far from her family in France, Celine realised how life-saving  and empowering it was to find and surround herself with other like-minded mums and support each other in that magical but challenging journey of being a new parent.
                        <br/><br/>Eager to give back, she developed and grew, along with her brand, the wonderful Eco Baby Planet community made of beautiful parents and families, all over the word. 
                        <br/><br/>Through our Blogs and Social Media​​​​​​​, we LOVE to  exchange, discuss, brainstorm and laugh with you all, so don't be shy and drop by to say Hi! 
                        </Desc>
                    </div>
                    <div className="col-md-5 mx-auto">
                        <h6 className="text-muted">Our Vision</h6><br/>
                        <Desc className="text-muted text-justify">Parenting is tough. Finding modern, high quality products for your little ones shouldn't be. 
                        <br/><br/>At Eco Baby Planet, we don't just create baby products. We create your favorite baby products. You know, the kind that gives you that nostalgic feeling when you have to put it away once your baby has grown up.
                        <br/><br/>Every decision we make is with this goal in mind. We dream it, then we make it and the end-result is something magical. We love reinventing what's possible and our promise to you is to deliver high quality, unique designs and creations but also experiences and ideas. We want to inspire you.
                        <br/><br/>Best ideas come from collaboration. We're excited to start a dialogue, learn about you and make something beautiful together.
                        <br/><br/>Let's connect! ​​​​​​​
                        </Desc>
                    </div>
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
    color: var(--mainWhite);
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
const Desc = styled.p`
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

