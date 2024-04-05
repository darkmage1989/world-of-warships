import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 500px;
`;

export const hoverAnimation = keyframes`
  to {
    transform: translateY(0);
  }
`;

export const Card = styled.div`
  position: relative;

  &:hover .face.face1 {
    transform: translateY(0);
    box-shadow:
      inset 0 0 60px #f0f0f0,
      inset 20px 0 80px #75e6da,
      inset -20px 0 80px #6dd5fa,
      inset 20px 0 300px #75e6da,
      inset -20px 0 300px #6dd5fa,
      0 0 50px #a3d8f4,
      -10px 0 80px #75e6da,
      10px 0 80px #6dd5fa;
  }
  &:hover .face.face1 .content {
    opacity: 1;
  }
  &:hover .face.face2 {
    transform: translateY(0);
  }
`;

export const Face1 = styled.div`
  transition: 0.4s;

  &.face1 {
    position: relative;
    background: #333;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    z-index: 1;
    transform: translateY(150px);
  }
`;

export const Content = styled.div`
  transition: 0.5s;
  text-align: center;
  padding-bottom: 40px;

  h3 {
    font-size: 1em;
    color: white;
    text-align: center;
  }

  a {
    transition: 0.5s;
  }
`;
export const Face2 = styled.div`
  position: relative;
  background: whitesmoke;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
  transform: translateY(-100px);
`;

export const ContentParagraph = styled.p`
  font-size: 10pt;
  margin: 0;
  padding: 0;
  color: #333;
`;
export const ShipIcon = styled.img``;
export const ContentLink = styled.a`
  text-decoration: none;
  color: black;
  box-sizing: border-box;
  outline: 1px dashed #333;
  padding: 10px;
  margin: 15px 0 0;
  display: inline-block;

  &:hover {
    background: #333;
    color: whitesmoke;
    box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.5);
  }
`;
