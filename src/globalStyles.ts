import  { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding:0;
    margin:0;
    text-decoration:none;
    color: ${({ theme }) => theme.colors.black};
  }
`;
