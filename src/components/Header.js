import styled from 'styled-components';

const header = () => {
  return (
    <Nav>
    <Logo>
        <img src="/resources/images/logo.svg" alt="Disney" />
    </Logo>
    <NavMenu>
        <a href="/home">
            <img src="/resources/images/home-icon.svg" alt="HOME" />
        </a>
        <span>Home</span>
    </NavMenu>
    </Nav>
  )
}

const Nav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    background-color: #090b13;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;
    letter-spacing: 10px;
    z-index: 3;
`;

const Logo = styled.a`
    padding: 0;
    width: 90px;
    margin-top: 4px;
    max-height: 70px;
    font-size: 0;
    display: inline-block;

    img{
        display: block;
        width: 100%;
    }

`;

const NavMenu = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-flow: row nowrap;
    height: 100%;
    justify-content: flex-end;
    margin: 0px;
    padding: 0px;
    position: relative;
    margin-left: 25px;


    // @media only screen and (max-width: 768px){
    //     display: none;
    // }
`;

export default header
