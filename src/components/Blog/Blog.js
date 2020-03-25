import React, { Component } from 'react';
import styled from 'styled-components';
import banner from '../../img/banner_blog.png';
import SideBar from './SideBar';
import RecentPosts from './RecentPosts';

export default class Blog extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <BannerImage>
                        <img src={banner} alt="banner" className="bg" />
                    </BannerImage>
                    <Text className="flexbox">
                        <h5 className="text-title">Baby & Parenting</h5>
                        <h5 className="text-title">Blog</h5>
                    </Text>
                </div>
                <Desc className="row p-2 mt-2 shadow">
                    <RecentPosts />
                    <SideBar />
                </Desc>
            </div>
        );
    }
}
 
const Text = styled.div`
    position: absolute; 
    color: var(--mainWhite);
    margin-top: 15vw;
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
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
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


