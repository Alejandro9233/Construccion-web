import styled from "styled-components";
import fondo from "./fondo.png"
import { Typography } from "antd";

const { Text: AntText } = Typography;

const Container = styled.div`
    width: 50%; /* Use percentage-based width */
    height: 100vh; /* 100% of the viewport height */
    background: url(${fondo}) no-repeat 50% / cover, linear-gradient(180deg, #1B242A 0%, #000 99.99%, rgba(255, 255, 255, 0.00) 100%);
    background-position: center; /* Center the background image */
    background-size: cover; /* Ensure the background covers the entire container */
    border-radius: 0 0 0 200px;
    position: absolute;
    top: 0;
    right: 0;

`;

/*
    width: 860px;
    height: 100%;
    background: url(${fondo}) no-repeat 50% / cover, linear-gradient(180deg, #1B242A 0%, #000 99.99%, rgba(255, 255, 255, 0.00) 100%);    ;
    background-size: contain; 
    background-repeat: no-repeat; 
    background-position: right;
    border-radius: 0 0 0 200px;
    position: absolute;
    top: 0;
    right: 0;
*/

const Text = styled(AntText)`
    &.footerRight {
        color: white;
        padding: 15px;
        align-self: flex-end;
    }

    &.footerLeft {
        color: #A3AED0;
        font-size: 16px;
        font-weight: 400;
        line-height: 100%; 
    }
`


export { Container, Text };