import styled from "styled-components";

// const Button = styled.button<{ $primary?: boolean;
// }>

const Button = styled.button<{ $primary?: boolean; }>`
    background: ${props => props.$primary ? "#Bf4F74" : "white"};
    color: ${props => props.$primary ? "white" : "#Bf4F74"};

    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid #BF4F74;
    border-radius: 3px;
`;


export {Button}