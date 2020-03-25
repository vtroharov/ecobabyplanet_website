import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
import styled from 'styled-components';
import { ButtonContainer } from '../Button';
import blogPost from '../../blog.json';

export default function RecentPosts(props) {

    const [posts, setPosts] = useState([]);

    useEffect( () => {
        const posts = blogPost.data;
        
        setPosts(posts)
    }, [posts]);

    return (
        <Blog>
            <Card style={{marginBottom: '20px', padding: '20px', boxSizing: 'border-box'}}>
                <div className="recentPosts">
                    {
                        posts.map(post => {
                            return (
                                <React.Fragment>
                                    <Card style={{marginBottom: '10px'}}>
                                        <PostImage className="postImageWrapper">
                                            <img className="postImage" src={require('../../img/blog/' + post.blogImage)} alt="Post Pic" />
                                        </PostImage>
                                        <Desc>
                                            <p className="postTitle">{post.blogTitle}</p>
                                            <span className="postedBy">posted on <span>{post.postedOn}</span> by <span>{post.author}</span></span> 
                                            <p className="postCat">Category - <span>{post.blogCategory}</span></p>
                                            <Link to={`/blog/${post.id}`}>
                                                <ButtonContainer className="mb-2 px-4">
                                                    Read More
                                                </ButtonContainer>
                                            </Link>
                                        </Desc>
                                    </Card>
                                </React.Fragment>
                            );
                        })
                    }
                </div>
            </Card>
        </Blog>
    )
}

const Blog = styled.div`
    width: 70%;
    padding-right: 10px;
`;

const PostImage = styled.div`
    .postImageWrapper {
        height: 450px;
        overflow: hidden;
    }
    .postImage {
        padding: 10px 20px;
        width: 100%;
        max-height: 300px;
        object-fit: cover;
    }
`;

const Desc = styled.div`
    text-align: center;
    .postedBy {
        display: block;
        font-size: 15px;
        font-style: italic;
        padding-bottom: 3px 0;
        font-weight: 300;
        color: #6c6c6c;
    }
    .postedBy span{
        font-weight: 400;
        color: #333;
    }
    .postCat {
        font-size: 15px;
        font-weight: 300;
        color: #6c6c6c;
    }
    .postCat span{
        font-weight: 400;
        color: #333;
    }
    .postTitle {
        letter-spacing: 0.5px;
        text-transform: capitalize;
        font-size: 25px;
        margin: 0;
        font-weight: 200 !important;
    }
`;

