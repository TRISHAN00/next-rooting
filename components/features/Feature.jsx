import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Container, Row, Col} from "react-bootstrap";
import Title from "../Title";
import {Swiper, SwiperSlide} from "swiper/react";
import img1 from '/public/images/dynamic/slider/Sanitary-.jpg'
import img2 from '/public/images/dynamic/slider/Kitchen-3.jpg'
import img3 from '/public/images/dynamic/slider/Marble-and-granites.jpg'
import img4 from '/public/images/dynamic/slider/Tiles-3.jpg'
import {Autoplay, Navigation, Pagination} from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Parallax, ParallaxProvider} from "react-scroll-parallax";


const MyComponent = () => {
    const [winWidth, setWinWidth] = useState(0)
    useEffect(() => {
        setWinWidth(window.innerWidth)
    }, [])
    console.log(winWidth)
    return (
        <StyledFeatures className={'features-area pt-120 pb-120'}>
            <Container>
                <Row>
                    <Col>
                        <Title smalFontCase={'uppercase'} smallTextColor={'rgb(1, 10, 26)'} afterWidth={'150px'}
                               small_text={"<span>featured</span><span>products</span>"}/>
                    </Col>
                </Row>
                <Row className={'slider-row'}>
                    {/*    swiper slide*/}
                    <Col sm={3}>
                        <ParallaxProvider>
                            <Parallax className={"parrallax_two"} speed={5}>
                                <Swiper Swiper modules={[Autoplay, Pagination, Navigation]}
                                    className={'mySwiper'}>
                                    <SwiperSlide>
                                        <img src={img1} alt="hello"/>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src={img2} alt="hello"/>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src={img3} alt="hello"/>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src={img4} alt="hello"/>
                                    </SwiperSlide>
                                </Swiper>
                            </Parallax>
                        </ParallaxProvider>

                    </Col>
                    <Col sm={6}>
                        <Swiper navigation={true} modules={[Navigation, Pagination]} className={'mySwiper'}>
                            <SwiperSlide>
                                <img src={img1} alt="hello"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={img2} alt="hello"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={img3} alt="hello"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={img4} alt="hello"/>
                            </SwiperSlide>
                        </Swiper>
                    </Col>
                    <Col sm={3}>
                        <ParallaxProvider>
                            <Parallax className={"parrallax_two"} speed={5}>
                                <Swiper className={'mySwiper'}>
                                    <SwiperSlide>
                                        <img src={img1} alt="hello"/>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src={img2} alt="hello"/>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src={img3} alt="hello"/>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src={img4} alt="hello"/>
                                    </SwiperSlide>
                                </Swiper>
                            </Parallax>
                        </ParallaxProvider>
                    </Col>
                </Row>
            </Container>
        </StyledFeatures>
);
};

const StyledFeatures = styled.section`

`;

export default MyComponent;
