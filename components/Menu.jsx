import React from 'react';
import Link from 'next/link'
import styled from "styled-components";
import {Container, Row} from "react-bootstrap";
import logo from '../public/images/dynamic/IMPIT_logo_white.png'
import Button from "./Button";

const MyComponent = () => {
    return (<StyledMenu className='main-menu'>
        <Container>
            <div className="main-menu__header">
                <div className="main-menu__header__logo">
                    <Link href={'/'}>
                        <a><img src={logo}/></a>
                    </Link>
                </div>
                <div className="main-menu__header__navIcons">
                    <Link href={'/'}>
                        <a>
                            <svg xmlns="http://www.w3.org/2000/svg" width="72" height="26" viewBox="0 0 72 26">
                                <g id="Hamburger" transform="translate(1 1)">
                                    <line id="Line_3541" data-name="Line 3541" x2="35" transform="translate(35 24)"
                                          fill="none" stroke="#F0EDE3" stroke-linecap="round" stroke-width="2"/>
                                    <line id="Line_3501" data-name="Line 3501" x2="70" transform="translate(0 12)"
                                          fill="none" stroke="#F0EDE3" stroke-linecap="round" stroke-width="2"/>
                                    <path id="Path_8263" data-name="Path 8263" d="M0,0H50" transform="translate(20)"
                                          fill="none" stroke="#F0EDE3" stroke-linecap="round" stroke-width="2"/>
                                </g>
                            </svg>
                        </a>
                    </Link>
                </div>
            </div>
        </Container>
    </StyledMenu>);
};

const StyledMenu = styled.header`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  width: 100%;
  
  top: 20px;
  .main-menu__header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__navIcons {
      display: flex;
      flex-direction: column;
      text-align: center;
      gap: 11px;
      width: 70px;
      cursor: pointer;
      height: auto;

      //svg {
      //  #Line_3541 {
      //    stroke: red;
      //  }
      //}

      span {
        border: 2px solid black;
        border-radius: 50px;
      }

      span:nth-of-type(1) {
        width: 50px;
      }

      span:nth-of-type(3) {
        width: 35px;
      }
    }
  }
`;

export default MyComponent;
