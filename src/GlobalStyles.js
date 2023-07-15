import { createGlobalStyle } from "styled-components";
import { GlolbalClasses } from "./GlobalClasses";
export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap');

body{
    font-family: 'Poppins', sans-serif;
}
    ${GlolbalClasses}
`;
