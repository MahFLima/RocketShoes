import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100px;
  background: var(--background);
  display: flex;
  justify-content: space-between;
`;

export const MenuSocial = styled.ul`
  display: flex;
  align-items: center;
  gap: 70px;
  > li {
    list-style-type: none;

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

  &:hover{
    opacity: 0.7;
  }

  >img{
    width: 24px;
    height: 24px;
  }
`;
