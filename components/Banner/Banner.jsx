import React from 'react';
import styled from "styled-components";
import {Container, Row, Col} from "react-bootstrap";
import Link from 'next/link';
import bg from '/public/images/dynamic/Banner.jpg'


const MyComponent = ({bg}) => {
    return (
        <StyledBanner className={'banner-area'}>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className="banner-area__text-big">
                            <h1>Committed to
                                Making an <span>Impact</span></h1>
                        </div>
                    </Col>
                </Row>
            </Container>
        </StyledBanner>
    );
};

const StyledBanner = styled.section`
  background-image: url('/images/dynamic/Banner.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
  .banner-area {
    &__text-big {
      padding-top: 250px;
      padding-bottom: 100px;
      h1 {
        font-size: 120px;
        line-height: 120px;
        color: #F0EDE3;
        font-weight: 600;
        span {
          color: #ED5333;
        }
      }
    }
  }
`;

export default MyComponent;
