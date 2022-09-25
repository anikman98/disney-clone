import styled from "styled-components"

const Viewers = () => {
  return (
    <Container>
      <Wrap>
        <img src="../../resources/images/viewers-disney.png" alt="Disney" />
        <video autoPlay={true} muted={true} loop={true} playsInline={true}>
            <source src="../../resources/videos/1564674844-disney.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="../../resources/images/viewers-marvel.png" alt="Marvel" />
        <video autoPlay={true} muted={true} loop={true} playsInline={true}>
            <source src="../../resources/videos/1564676115-marvel.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="../../resources/images/viewers-national.png" alt="National" />
        <video autoPlay={true} muted={true} loop={true} playsInline={true}>
            <source src="../../resources/videos/1564676296-national-geographic.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="../../resources/images/viewers-pixar.png" alt="Pixar" />
        <video autoPlay={true} muted={true} loop={true} playsInline={true}>
            <source src="../../resources/videos/1564676714-pixar.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="../../resources/images/viewers-starwars.png" alt="Star Wars" />
        <video autoPlay={true} muted={true} loop={true} playsInline={true}>
            <source src="../../resources/videos/1608229455-star-wars.mp4" type="video/mp4" />
        </video>
      </Wrap>
    </Container>
  )
}

const Container = styled.div`
    margin-top: 30px;
    padding: 30px 0px 26px;
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat( 5, minmax(0, 1fr));


    @media only screen and (max-width: 768px){
        grid-template-columns: repeat(1, minmax(0, 1fr));
        grid-gap: 30px;
    }


`;

const Wrap = styled.div`
    padding-top: 55%;
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    transition: all 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    border: 3px solid rgba(249, 249, 249, 0.1);

    img {
        inset: 0px;
        display: block;
        height: 100%;
        object-fit: cover;
        opacity: 1;
        position: absolute;
        transition: opacity 500ms ease-in-out 0s;
        width: 100%;
        z-index: 1;
        top: 0;
    }

    video {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0px;
        z-index: 0;
        opacity: 0;
    }

    &:hover {
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 60px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transform: scale(1.04);
        border: 3px solid rgba(249, 249, 249, 0.8);

        video {
            opacity: 1;
        }
    }

    @media only screen and (max-width: 768px){
      margin: 0px 20px;
      height: 100%;
      
      video{
        height:100%;
        width: auto;
      }
    }
`;

export default Viewers
