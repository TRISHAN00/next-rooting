import {Img} from "./Img";
import React from "react";
import styled from "styled-components";
import {Col, Container, Row} from "react-bootstrap";
import ReactHtmlParser from "react-html-parser";
import {ParallaxBanner, ParallaxBannerLayer} from "react-scroll-parallax";

const InnerBanner = ({title, img, full}) => {

    return (
        <StyledInnerBanner full={full} className="InnerBanner">
            <ParallaxBanner id="hero-banner"
                            className="InnerBanner__parallax"

            >
                <ParallaxBannerLayer
                    expanded={false}
                    translateY={[0, 50]}
                    shouldAlwaysCompleteAnimation={true}
                    shouldDisableScalingTranslations={true}

                >
                <Img src={img} alt=""/>
                <Container>
                    <Row>
                        <Col md={12}>
                            <h1>{ReactHtmlParser(title)}</h1>
                        </Col>
                    </Row>
                </Container>

                </ParallaxBannerLayer>
            </ParallaxBanner>
        </StyledInnerBanner>
    );
};

const StyledInnerBanner = styled.section`
  position: relative;

  .InnerBanner__parallax {
    padding-top: ${props => props.full ? '100vh' : '70vh'};
    position: relative;
    @media (min-width: 1550px) {
      padding-top: ${props => props.full ? '100vh' : '60vh'};
    }
    @media (max-width: 767px) {
      padding-top: ${props => props.full ? '100vh' : 'calc(450 / 414 * 100%)'} ;
    }

    .container {
      position: absolute;
      margin: auto;
      left: 50%;
      z-index: 2;
      top: 50%;
      transform: translate(-50%, -50%);
      text-align: center;

      h1 {
        color: #ffffff;
        z-index: 2;
        font-size: 48px;
        font-weight: 600;
        line-height: 52px;
        margin: 0;
        text-transform: uppercase;
        @media (max-width: 767px) {
          font-size: 30px;
          line-height: 35px;
        }
      }
    }
  }
`;

export default InnerBanner;
