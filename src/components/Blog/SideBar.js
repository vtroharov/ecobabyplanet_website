import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Card from './Card';
import blogPost from '../../blog.json';
import { ButtonContainer } from '../Button';


export default function SideBar(props) {

    const [posts, setPosts] = useState([]);

    useEffect( () => {
        const posts = blogPost.data;
        
        setPosts(posts)
    }, [posts]);

    return (
        <Side>
            <Card style={{marginBottom: '15px', padding: '15px', boxSizing: 'border-box'}}>
                <div className="cardHeader">
                    <span className="subscribe pb-1">Subscribe to our Blog</span>
                    <form className="mt-4">
                        <div className="mx-auto">
                            <input type="email" className="form-control shadow" id="inputEmail" placeholder="Email" />
                        </div>
                        <div className="mx-auto mt-2">
                            <ButtonContainer type="submit" className="btn btn-default shadow">Submit</ButtonContainer>
                        </div>
                    </form>
                </div>
            </Card>
            <Card style={{marginBottom: '15px', padding: '15px', boxSizing: 'border-box'}}>
                <div className="cardHeader">
                    <span>Social Network</span>
                </div>
            </Card>
            <Card style={{marginBottom: '20px', padding: '20px', boxSizing: 'border-box'}}>
                <div className="cardHeader">
                    <span>Recent Post</span>
                </div>
                <div className="recentPosts">
                    {
                        posts.map(post => {
                            return (
                                <NavLink key={post.id} to={`/blog/${post.id}`}>  {/* key={post.id} to={`/post/${post.slug}`}> */}
                                    <div className="recentPost">
                                        <h3 className="">{post.blogTitle}</h3>
                                        <span>{post.postedOn} by {post.author}</span>
                                    </div>
                                </NavLink>
                            );
                        })
                    }
                </div>
            </Card>
        </Side>
        
    )
}

const Side = styled.div`
    width: 30%;
    padding-left: 10px;
    .cardHeader {
        text-align: left;
    }
    .subscribe {
        border-bottom: 1px solid #eee;
    }
    .cardHeader span{
        text-transform: uppercase;
        font-size: 15px;
        text-align: center;
        box-sizing: border-box;
        letter-spacing: 2px;
        color: #333;
    
    }
    .recentPosts {
        padding: 20px 0;
    }
    .recentPost {
        border-bottom: 1px solid #eee;
        margin-bottom: 10px;
    }
    .recentPost h3 {
        color: #6c6c6c;
        letter-spacing: 1px;
        font-size: 14px;
        font-weight: 500;
        margin: 0;
    }
    .recentPost span{
        font-size: 10px;
        font-weight: 400;
        color: #3c3c3c;
    }
    .btn {
        width: 100%;
    }
`;