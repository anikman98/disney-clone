import React from 'react'
import styled from 'styled-components';

const Footer = () => {
  return (
    <Container>
        <div className="left">
            <h5>About Disney+</h5>
            <h5>Terms Of Use</h5>
            <h5>Privacy Policy</h5>
            <h5>FAQ</h5>
            <h5>Feedback</h5>
            <h5>Careers</h5>
        </div>
        <div className="right">
            <h3></h3>
        </div>
    </Container>
  )
}

const Container = styled.div`
    padding: 0 0 26px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;


    .left{
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        gap: 50px;
        color: grey;
        cursor: pointer;

        h5{

            &:hover{
                color: #0040ff;
            }
        }
    }
`;

export default Footer