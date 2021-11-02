import styled from 'styled-components';
import { shade } from 'polished';

const pink = '#FF009A';

export const Container = styled.main`
  width: 100vw;
  height: 100vh;

  .hamburguer {
    border: none;
    border-radius: 50%;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    background: var(--pink);
    position: absolute;
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 2rem;
    top: 2rem;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    transition: background 0.2s ease-in-out;

    &:hover {
      background: ${shade(0.2, pink)};
    }
  }
`;

export const Content = styled.div`
  background: var(--gray);
  height: 100%;
  width: 100%;
  padding: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .container {
    background: var(--white);
    width: 80%;
    height: 100%;
    border: 3px solid var(--footer);
    padding: 2rem;
    border-radius: 2rem;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
`;
