import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';
import styled from 'styled-components';


export default class Details extends Component {

    constructor(props) {
        super(props);
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.state = {
          image_no: 0,
          total_images: 0
        };
      }

    increment(e, img) {
        this.setState({total_images: img.length -1});
        if (this.state.image_no === this.state.total_images && this.state.total_images !== 0) {
            this.setState({image_no: this.state.image_no * 0});
        }
        else {
            this.setState({image_no: this.state.image_no + 1});
        }
    };

    decrement(e, img) {
        this.setState({total_images: img.length -1});
        if (this.state.image_no === 0 && this.state.total_images !== 0) {
            this.setState({image_no: this.state.total_images});
        }
        else {
            this.setState({image_no: this.state.image_no - 1});
        }
    };


    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const {id, company, img, info, price, title, inCart} = value.detailProduct;
                    //this.state.total_images = img.length - 1;
                    //this.setImages(img);
                    return (
                        <div className= "container py-5">
                            {/* title */}
                            <div className= "row">
                                <div className= "col-10 mx-auto text-center text-slanted text-blue my-5">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            {/* product info */}
                            <div className= "row">
                                <Gallery className= "col-10 mx-auto col-md-6 my-3">
                                    <img src={Array.isArray(img) ? img[this.state.image_no] : img} className= "img-fluid" alt= "product" />
                                    <ButtonContainer className='button1' onClick={(e) => this.increment(e, img)}>&#8594;</ButtonContainer>
                                    <ButtonContainer className='button2' onClick={(e) => this.decrement(e, img)}>&#8592;</ButtonContainer>
                                </Gallery>
                                {/* product text */}
                                <div className= "col-10 mx-auto col-md-6 my-3">
                                    <h2>Model: {title}</h2>
                                    <h4 className= "text-title text-uppercase text-muted mt-3 mb-2">
                                        made by: <span className= "text-uppercase">
                                            {company} </span>
                                    </h4>
                                    <h4 className= "text-blue">
                                        <strong>
                                            Price: <span>$</span>
                                            {price}
                                        </strong>
                                    </h4>
                                    <p className= "text-capitalize font-weight-bold mt-3 mb-0">
                                        some info about the product:
                                    </p>
                                    <Info className= "text-muted lead">
                                        {info}
                                    </Info>
                                    {/* button */}
                                    <div>
                                        <Link to='/au_shop'>
                                            <ButtonContainer>
                                                back to products
                                            </ButtonContainer>
                                        </Link>
                                        <ButtonContainer 
                                            cart
                                            disabled= {inCart ? true : false}
                                            onClick= {() => {
                                                value.addToCart(id);
                                                value.openModal(id);
                                            }}
                                        >
                                            {inCart ? "inCart" : "add to cart"}
                                        </ButtonContainer>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                }}

            </ProductConsumer>
        );
    }
}


const Info = styled.pre`
    text-align: justify;
    font-family: monospace;
    overflow-x: auto;
    white-space: pre-wrap;
`;

const Gallery = styled.div`
    .img-fluid {
        width: 100%;
        height: auto;
    }
    .button1 {
        transition: none !important;
        position: absolute;
        top: 120px;
        right: 20px;
        @media (min-width: 425px) {
            position: absolute;
            top: 200px;
            right: 20px;
        }
        @media (min-width: 768px) {
            position: absolute;
            top: 150px;
            right: 20px;
        }
        @media (min-width: 992px) {
            position: absolute;
            top: 200px;
            right: 20px;
        }
        @media (min-width: 1200px) {
            position: absolute;
            top: 250px;
            right: 20px;
        }
    }
    .button2 {
        transition: none !important;
        position: absolute;
        top: 120px;
        left: 20px;
        @media (min-width: 425px) {
            position: absolute;
            top: 200px;
            left: 20px;
        }
        @media (min-width: 768px) {
            position: absolute;
            top: 150px;
            left: 20px;
        }
        @media (min-width: 992px) {
            position: absolute;
            top: 200px;
            left: 20px;
        }
        @media (min-width: 1200px) {
            position: absolute;
            top: 250px;
            left: 20px;
        }
    }
`;