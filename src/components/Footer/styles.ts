import styled, { css } from "styled-components";
import {
  FacebookSquare,
  Instagram,
  Youtube,
  Twitter,
} from "../../styles/Icons";

export const Container = styled.div`
  width: 100%;
  height: 100px;
  background: var(--background);
  display: flex;
  justify-content: space-between;

  @media (max-width: 720px) {
    display: none;
  }
`;

export const MenuSocial = styled.ul`
  display: flex;
  align-items: center;
  > li {
    list-style-type: none;
    padding: 1rem;

    &:hover {
      opacity: 0.7;
    }
    > a {
      text-decoration: none;
      font-size: 18px;
      font-weight: 700;
      color: var(--text);
    }
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const Explorer = styled.button`
  width: 300px;
  height: 100%;
  color: white;
  background: var(--footer);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 700;
  gap: 14px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  > img {
    width: 24px;
    height: 24px;
  }
`;

export const MenuSocialResponsive = styled.div`
  display: none;

  @media (max-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    gap: 2rem;
  }
`;
export const iconCss = css`
  width: 3rem;
  height: 3rem;
`;

export const IconInstagram = styled(Instagram)`
  ${iconCss}
`;
export const IconYoutube = styled(Youtube)`
  ${iconCss}
`;
export const IconFacebook = styled(FacebookSquare)`
  ${iconCss}
`;
export const IconTwitter = styled(Twitter)`
  ${iconCss}
`;
