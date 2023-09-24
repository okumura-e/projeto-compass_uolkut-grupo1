import styled, { css } from "styled-components";
import formImage from "../../assets/form-image.png";

export const Container = styled.main`
  ${({ theme }) => {
    return css`
      display: flex;
      align-items: center;
      justify-content: center;
      max-width: 1200px;
      margin: 0 auto;
      padding: 3.2rem 2rem;

      gap: 3.2rem;

      @media screen and (min-width: 1200px) {
        padding: 3.2rem 0;
      }

      ${theme.medias.desktop} {
        margin: auto;
      }
    `;
  }}
`;
export const LeftSection = styled.section`
  ${({ theme }) => {
    return css`
      z-index: 1;
      position: relative;
      background-image: url(${formImage});
      background-position: center;
      background-repeat: no-repeat;
      min-height: 600px;
      max-width: 800px;
      display: none;
      width: 100%;
      padding: 3.2rem;

      border-radius: 16px;
      overflow: hidden;

      ${theme.medias.desktop} {
        display: flex;
        align-items: flex-end;
      }

      &::after {
        z-index: 2;
        content: "";
        position: relative;
        inset: 0;
        display: block;
        background: linear-gradient(
          195deg,
          rgba(20, 20, 20, 0) 7.46%,
          #141414 69.4%
        );
      }
    `;
  }}
`;
export const Text = styled.p`
  font-size: 3.2rem;
  color: #fff;
  font-weight: 500;
  max-width: 600px;
  z-index: 3;
`;
