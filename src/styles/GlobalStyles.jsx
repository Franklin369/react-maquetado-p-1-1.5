
import {createGlobalStyle} from "styled-components"

export const GlobalStyle = createGlobalStyle`
@import "https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap";
    body{
        margin:0;
        padding:0;
        box-sizing:border-box;
        background-color:${(props)=>props.theme.body};
        font-family: "Poppins", sans-serif;
    }
`