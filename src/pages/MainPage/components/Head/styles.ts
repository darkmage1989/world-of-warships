import styled from "styled-components";
export const TitleImg = styled.div`
  background-image: url("/images/logo.png");
  background-color: ${({ theme }) => theme.colors.darkBlue};
  height: 90vh;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;
