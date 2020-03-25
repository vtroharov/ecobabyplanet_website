import React from 'react';
import styled from 'styled-components';

export default function Card(props) {
    return (
        <div className="card shadow" style={{width: props.width ? props.width : '100%'}} {...props}>
            {props.children}
        </div>
    )
}

const div = styled.div`
    background: #fff;
    width: 100%;
`;