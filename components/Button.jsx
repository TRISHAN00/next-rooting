import React, {useState, useEffect} from 'react';
import {gradient, hover} from '../styles/globalStyleVars';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';


const Button = ({
                    onSubmit,
                    text,
                    src,
                    img,
                    hoverImg,
                    fontSize,
                    fontWeight,
                    color,
                    letterSpacing,
                    lineHeight,
                    margin,
                    background,
                    borderRadius,
                    border,
                    width,
                    height,
                    hoverBackground,
                    target,
                    borderColor
                }) => {


    return (
        <StyledBtn className={`dc-btn`}
                   fontSize={fontSize}
                   fontWeight={fontWeight}
                   color={color}
                   background={background}
                   lineHeight={lineHeight}
                   letterSpacing={letterSpacing}
                   margin={margin}
                   border={border}
                   img={img}
                   borderRadius={borderRadius}
                   width={width}
                   hoverImg={hoverImg}
                   hoverBackground={hoverBackground}
                   height={height}
                   borderColor={borderColor}
                   target={target}
        >
            {src ? (
                <Link href={src || '/'}>
                    <a target={target || '_self'}>
                        <span> {text}  </span>
                    </a>
                </Link>
            ) : (
                <a target={target || '_self'}>
                    <span>{text}</span>
                </a>
            )}
        </StyledBtn>
    )
};

const StyledBtn = styled.div`
  &.dc-btn {
    margin: ${props => props.margin || '0'};
    width: ${props => props.width || '200'}px;
    height: ${props => props.height || '53'}px;
    cursor: pointer;

    a {
      display: flex;
      height: 100%;
      width: 100%;
      align-items: center;
      justify-content: center;
      font-size: ${props => props.fontSize || '14'}px;
      font-weight: ${props => props.fontWeight || 500};
      margin: 0;
      line-height: ${props => props.lineHeight || '18'}px;
      text-transform: uppercase;
      border: 1px solid ${props => props.borderColor || '#010A1A'};
      background-color: ${p => p.background || `transparent`};
      letter-spacing: ${props => props.letterSpacing || `2px`};
      position: relative;
      border-radius: ${props => props.borderRadius || '0'};
      overflow: hidden;
      z-index: 0;
      transition: border .3s ease;
      padding: 0 12%;
      box-sizing: border-box;

      span {
        transition: color .3s ease;
        color: ${props => props.color || `#010A1A`};
      }

      &:before {
        bottom: 0;
        content: "";
        display: block;
        left: auto;
        position: absolute;
        right: 0;
        top: 0;
        -webkit-transition: left 0.25s ease-in-out, right 0.25s ease-in-out, width 0.25s ease-in-out;
        transition: left 0.25s ease-in-out, right 0.25s ease-in-out, width 0.25s ease-in-out;
        width: 0;
        z-index: -1;
        background-color: ${hover};

      }

      &:hover {
        border-color: transparent;

        span {
          color: #FFF;
        }

        svg line {
          stroke: #FFF;
        }

        &:before {
          left: 0;
          right: auto;
          width: 100%;
        }
      }

      &:focus {
        color: #222222;
      }
    }
  }

`;


export default Button;
