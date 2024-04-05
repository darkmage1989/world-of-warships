import styled from "styled-components";

type props = {
  $isActive?: boolean;
};

export const Button = styled.button<props>`
  background-color: ${({ theme, $isActive }) =>
    $isActive ? "red" : theme.colors.lightBlue};
`;
