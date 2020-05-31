import React, {useState, useEffect} from 'react';
import Card from './Card';
import styled from 'styled-components';
import { ButtonContainer } from '../Button';
import { Link } from 'react-router-dom';
import blogPost from '../../blog.json';

export default function BlogPost(props) {

    const [post, setPost] = useState({
        id: "" ,
        blogCategory: "" ,
        blogTitle : "" ,
        postedOn: "" ,
        author: "" ,
        blogImage: "" ,
        blogText: ""
    });
    const [varId, setPostId] = useState('');
    console.log(varId);
    
    useEffect(() => {
        const postId = props.match.params.postId;
        const post = blogPost.data.find(post => post.id === postId);
        setPost(post);
        setPostId(postId)
    }, [post, props.match.params.postId]);

    if(post.blogImage === "") return null;
    
    return (
        <Blog className="blogPostContainer">
            <Card>
                <div className="blogHeader">
                    <span className="blogCategory">{post.blogCategory}</span>
                    <h1 className="postTitle">{post.blogTitle}</h1>
                    <span className="postedBy">posted on <span>{post.postedOn}</span> by <span>{post.author}</span></span>
                </div>
                <div className="postImageContainer">
                    <img src={require('../../img/blog/' + post.blogImage)} alt="Post Pic" />
                </div>
                <div className="postContent text-justify">
                    <h3>{post.blogTitle}</h3>
                    <p>{post.blogText}</p>
                </div>
                <Link to={`/blog`} className="mx-auto">
                    <ButtonContainer className="mb-3 px-4 mx-auto">
                        Back to Blog
                    </ButtonContainer>
                </Link>
            </Card>
        </Blog>

    )
}

const Blog = styled.div`
    width: 70%;
    padding-right: 10px;
    .blogPostContainer {
        width: 70%;
    }
    .blogHeader {
        text-align: center;
    }
    .blogCategory {
        display: block;
        font-size: 14px;
        padding: 10px 0;
    }
    .postTitle {
        letter-spacing: 0.5px;
        text-transform: capitalize;
        font-size: 30px;
        margin: 0;
        font-weight: 400;
    }
    .postedBy {
        display: block;
        font-size: 15px;
        font-style: italic;
        padding: 10px 0;
        font-weight: 300;
        color: #6c6c6c;
    }
    .postedBy span{
        font-weight: 400;
        color: #333;
    }
    .postImageContainer{
        width: 100%;
        padding: 10px;
        box-sizing: border-box;
    }
    .postImageContainer img{
        max-width: 100%;
        max-height: 100%;
    }
    .postContent h3{
        font-weight: 400;
        color: #333;
        padding: 0 10px;
    }
    .postContent p{
        font-size: 12px;
        color: #6c6c6c;
        font-weight: 300;
        letter-spacing: 1px;
        padding: 0 10px;
    }
`;