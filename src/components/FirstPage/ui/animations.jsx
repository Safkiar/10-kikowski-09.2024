import { keyframes } from "styled-components";

export const moveInRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(80px);
  }
  75% {
    transform: translateX(-3px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const moveInLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-80px);
  }
  75% {
    transform: translateX(3px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const moveInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  75% {
    transform: translateY(-3px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;