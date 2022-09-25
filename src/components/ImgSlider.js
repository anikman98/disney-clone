import React from 'react';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick'

const ImgSlider = () => {

  let settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div>
      <Carousel {...settings}>
        <Wrap>
          <a>
            <img src="../../resources/images/slider-badag.jpg" alt="" />
          </a>
        </Wrap>
        <Wrap>
          <a>
            <img src="../../resources/images/slider-badging.jpg" alt="" />
          </a>
        </Wrap>
        <Wrap>
          <a>
            <img src="../../resources/images/slider-scale.jpg" alt="" />
          </a>
        </Wrap>
        <Wrap>
          <a>
            <img src="../../resources/images/slider-scales.jpg" alt="" />
          </a>
        </Wrap>
      </Carousel>
    </div>
  )
}

const Carousel = styled(Slider)`
  margin-top: 20px;

  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;

    &:hover{
      opacity:1;
      transition: opacity 0.2s ease 0s;
    }
  }

  ul li button{
    &:before{
      font-size: 10px;
      color: rgb(150, 158, 171);

    }
  }

  li.slick-active button:before {
    color: white;
  }

  .slick-list{
    overflow: initial;
  }

  .slick-prev{
    left: -75px;
  }

  .slick-next{
    right: -75px;
  }
`;

const Wrap = styled.div`
  border-radius: 10px;
  cursor: pointer;
  position: relative;
  transition: scale 500ms;

  a{
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb( 0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    border: 5px solid rgba(249, 249, 249, 0.1);
    margin: 15px;
    transition: border 500ms;

    &:hover{
      padding: 0;
      border: 5px solid rgba(249, 249, 249, 0.8);
    }
  }

  img{
    border-radius: 10px;
    margin:auto;
    width: 100%;
    height: 100%;
  }

  &:hover{
    scale: 1.015;
    
  }
`;

export default ImgSlider;
