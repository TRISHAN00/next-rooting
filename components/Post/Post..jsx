import React from 'react';
import styled from "styled-components";
import {Col, Container, Row} from "react-bootstrap";
import Button from "../Button";
import Link from "next/link";

const MyComponent = ({post}) => {
    return (


        <Col sm={4}>
            <StyledPost className={'post-content'} >
                <h1>{post.id}</h1>
                <h5>{post.title}</h5>

                    <Button src={`/posts/${post.id}`} hoverBackground={'#000'} borderColor={'#fff'} color={'#fff'} background={''} text={'Ream More'} />

            </StyledPost>
        </Col>

    );
};

const StyledPost = styled.div`
  background: #ED5333;
  margin-bottom: 30px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  h1, h5 {
    color: #fff;
  }
  h1 {
    text-align: center;
  }
`;

export default MyComponent;
