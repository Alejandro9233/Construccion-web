import styled from "styled-components";
import { Input as AntInput,  Image as AntImage, Button as AntButton } from "antd";

const StyledInput = styled(AntInput)`
    width: 75%;

`;

const StyledImage = styled(AntImage)`
    width: 200px;
    margin: -5px;
    
`;

const StyledButton = styled(AntButton)`
    width: 25%;
    margin: 10px;
    background-color: black;

`;


export { StyledImage, StyledInput, StyledButton};
