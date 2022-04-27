import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const Price = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;

  > div {
    width: min(357px, 100%);
    height: min(533px, 100%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 21px;

    > h1 {
      font-size: 40px;
      font-weight: 700;
    }

    > p {
      font-size: 16px;
      font-weight: 700;
      color: var(--text-description);
    }

    > h3 {
      font-size: 40px;
      font-weight: 700;
    }
    > button {
      width: 200px;
      padding: 1rem;
      text-align: center;
      border: none;
      background: var(--button);
      color: white;
      font-size: 24px;
      font-weight: 700;
      cursor: pointer;

      &:hover{
        opacity: 0.7;
      }
    }
  }
`;

export const Main = styled.div`
  width: 60%;
  height: 100%;
  background: var(--main-background);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
`;

export const ImgShoes = styled.img`
  width: 397px;
  height: 310.82px;
`;

export const ContentShoes = styled.div`
  display: flex;
  gap: 30px;

  >img{
    width: 200px;
    height: 150px;
  }
`
