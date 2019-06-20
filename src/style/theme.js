import styled, { keyframes } from "styled-components";
import { cityBg } from "../assets/images";
import { road } from "../assets/images";
import { throttle } from "../assets/images";

const animatedBg = keyframes`
  0% {
    background-position: 20% 0;
  }
  100% {
    background-position: -5000vw 0;
  }
`;

export const CityBg = styled.div`
  background: url(${cityBg});
  background-repeat: repeat-x;

  background-size: cover;
  @media screen and (min-width: 1300px) {
    background-size: contain;
  }
  height: 400px;
  width: 100%;
  animation-name: ${animatedBg};
  animation-duration: 80s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  animation-play-state: ${({ animate }) => (animate ? "running" : "paused")};
  z-index: -10;
`;
export const Road = styled.div`
  width: 100%;
  background: url(${road});
  background-repeat: repeat-x;
  background-size: contain;
  height: 200px;
  animation-name: ${animatedBg};
  animation-duration: 20s;
  animation-play-state: ${({ animate }) => (animate ? "running" : "paused")};
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
`;
export const Throttle = styled.div`
  display: none;
  @media screen and (min-width: 700px) {
    display: initial;
    background: url(${throttle});
    background-repeat: no-repeat;
    background-size: contain;
    width: 130px;
    height: 200px;
    transform: ${({ animate }) => (animate ? "skewX(-5deg)" : "skewX(0)")};
    transform: ${({ animate }) => (animate ? "rotateX(14deg)" : "rotateX(0)")};
    transform-origin: 100% 100%;
  }
`;
