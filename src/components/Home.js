import React from 'react';
import styled from 'styled-components';
import ImgSlider from './ImgSlider';
import Viewers from './Viewers';
import Recommendations from './Recommendations';

const Home = () => {
  return (
    <Contianer>
        <ImgSlider />
        <Viewers />
        <Recommendations />
    </Contianer>
  )
}

const Contianer = styled.main`
    position: relative;
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: 0 calc(3.5vw + 5px);
    
    &:after{
        background: url("/resources/images/home-background.png") no-repeat fixed center;
        background-size: cover;
        content: "";
        position: absolute;
        inset: 0px;
        opacity: 1;
        z-index: -1;
    }
`;

export default Home