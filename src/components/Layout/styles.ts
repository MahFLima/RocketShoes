import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background: var(--background);
  position: relative;

  @media (max-width: 1024px){
    width: 100%;
    height: 100%;
  }
`;

