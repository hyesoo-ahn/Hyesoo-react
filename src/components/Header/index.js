import React from 'react';
import styled from 'styled-components'

function  Header () {
    return (
        <Container>
            <Logo>Logo</Logo>
            <Nav>
                <NavItem>Home</NavItem>
                <NavItem>word</NavItem>
                <NavItem>service</NavItem>
                <NavItem>contact</NavItem>
            </Nav>
        </Container>
    )
}

const Container = styled.header`
  display: flex;
  background: #fff;
  border-bottom: 1px solid #eee;
  padding: 0 60px;
`;

const Logo = styled.div`
    
`;

const Nav = styled.div`
  display: flex;
`;

const NavItem = styled.div`
  height: 60px;
  padding: 0 20px;
  margin: 0 20px;
`;

const Menu = styled.div`
    
`;

export default Header;