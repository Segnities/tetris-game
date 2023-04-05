import styled from "styled-components";

import BgImage from "../../assets/img/bg.png";


export const StyledTetrisWrapper = styled.div`
    max-width:100vw;
    min-height: 100vh;
    background: url(${BgImage}) #000;
    background-size: cover;
    overflow: hidden; 
`;

export const StyledTetris = styled.div`
    display: flex;
    align-items: flex-start;
    padding: 40px;
    margin: 0 auto;
    max-width: 900px;

`;

export const StyledTetrisAside = styled.div`
    width: 100%;
    max-width: 200px;
    display: block;
    padding: 0 20px;
`;