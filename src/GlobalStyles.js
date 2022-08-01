import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --etfs: #F2F2F2;
        --clock: #E99B8D;
        --stocks: #C4CAE4;
        --white : #FFFFFF;
        --contact: #918F8C;
        --primaryColor: #07775D;
        --headingColor: #232323;
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
    }

`;
