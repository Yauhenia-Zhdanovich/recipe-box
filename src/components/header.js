import React from 'react';
import styled from "styled-components";

const StyledHeader = styled.header`
    text-align:center;
    margin:1rem;
    font-family:'Montserrat',sans-serif;
    font-size:3rem;
`;
const HR = styled.hr`
    width:90%;
    @media only screen and (min-width : 480px) {
        width:80%;
    }
    @media only screen and (min-width : 768px) {
        width:70%;
    }
    @media only screen and (min-width : 992px) {
        width:40%;
    }
    @media only screen and (min-width : 1200px) {
        width:40%;
    }
`;

let Header = ()=>{
    return(
    <StyledHeader>
        Recipe Box
        <HR/>
    </StyledHeader>)
}

export default Header;