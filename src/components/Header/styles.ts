import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 20px 60px;
  align-items: center;
  gap: 80px;
  justify-content: center;
  position: absolute;
  z-index: 1;

  >div{
    position: relative;
    width: 220px;
    height: 45px;
    display: flex;
    align-items: center;
  }
`;

export const IconShoes = styled.img`
  width: 52px;
  height: 36.4px;
  cursor: pointer;

  &:hover{
      opacity: 0.7;
    }
`
export const Menu = styled.ul`
  display: flex;
  gap: 50px;

  >li{
    list-style-type: none;
    &:hover{
      opacity: 0.7;
    }
    >a{
      text-decoration: none;
      font-size: 24px;
      font-weight: bold;
      color: var(--text);
    }
  }
` 
export const InputSearch = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  font-size: 18px;
  font-weight: 500;
  padding: 10px 30px;
`
export const IconBag = styled.video`
  width: 34px;
  height: 34px;
  cursor: pointer;

  &:hover{
      opacity: 0.7;
    }
`

export const IconSearch = styled.img`
  width: 24px;
  height: 22px;
  position: absolute;
  left: 5px;
`
