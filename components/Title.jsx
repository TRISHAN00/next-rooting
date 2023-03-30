import React from 'react';
import styled from 'styled-components';
import {text, title, title_ms60} from "../styles/globalStyleVars";
import ReactHtmlParser from "react-html-parser";

const Title = ({
                   text,
                   fontSize,
                   fontWeight,
                   color,
                   letterSpacing,
                   lineHeight,
                   textTransform,
                   margin,
                   padding,
                   smallTextColor,
                   borderColor,
                   varient,
                   smalFontCase,
                   small_text,
                   afterWidth,
               }) => {


    return (

        <StyledTitle className={`title `}
                     fontSize={fontSize}
                     fontWeight={fontWeight}
                     color={color}
                     lineHeight={lineHeight}
                     LetterSpacing={letterSpacing}
                     textTransform={textTransform}
                     margin={margin}
                     padding={padding}
                     smalFontCase={smalFontCase}
                     smallTextColor={smallTextColor}
                     varient={varient}
                     afterWidth={afterWidth}
                     borderColor={borderColor}>

            { text ? <h2 className={'fade-up'}>            {ReactHtmlParser(text)} </h2> : '' }
            {small_text ? <p className={'small_title fade-up'}>{ReactHtmlParser(small_text)}</p> : "" }

        </StyledTitle>

    )
};


const StyledTitle = styled.div`
  ${props => props.varient ? props.varient : title_ms60};
  h2 {
    margin: ${props => props.margin || '0px'};
  color: ${props => props.color || text};
  font-weight: ${props => props.fontWeight || '600'};
  font-size: ${props => props.fontSize || '14px'};
  position: relative;
  width: 100%;
  font-family: ${title};
  text-transform: ${props => props.textTransform || 'uppercase'};
  display: flex;
  justify-content: space-between;
  }
  
  
  .small_title{
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 1.5px;
    line-height: 30px;
    color: ${props => props.smallTextColor || '010A1A'};
    position: relative;
    min-width: 150px;
    text-transform: ${props => props.smalFontCase || ''};

    span{
      display: block;
    }
    &:after{
      position: absolute;
      left: 0;
      
      width: ${(props) => props.afterWidth || '100%'};
      content: "";
      background: #010A1A;
      height: 1px;
      bottom: 30px;
    }
  }


  @media (max-width: 767px) {
    margin-bottom: 40px;
    //flex-direction: column-reverse;
    display: grid;
    grid-auto-flow: row;
    h2{
      order: 2;
    }
    .small_title{
      order: 1;
      margin-bottom: 60px;
      margin-bottom: 30px;
    }
  }
`;


export default Title;














