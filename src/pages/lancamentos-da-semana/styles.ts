import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.main`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: var(--white); */
  padding: 5rem 0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--white);

  div {
    display: flex;
    align-items: center;
  }
`;
