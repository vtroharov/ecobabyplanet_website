import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import styled from 'styled-components';
import { ProductConsumer } from '../context';

export default class ProductList extends Component {
    render() {
        return (
            <React.Fragment>
                <Main className="py-5">
                    <div className="container">
                        <Title name="our" title="products" />
                        <div className="row">
                            <ProductConsumer>
                                { value => {
                                    return value.products.map( product => {
                                        return <Product key={product.id} product={product} />;
                                    });
                                }}
                            </ProductConsumer>
                        </div>

                    </div>
                </Main>

            </React.Fragment>
        );
    }
}

const Main = styled.div`
    margin-top: 75px;
`;
