import styled from 'styled-components';
import { shade } from 'polished';

const pink = '#FF009A';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  h1 {
    font-size: 4rem;
    color: var(--pink);
    display: flex;
    align-items: center;
    gap: 0.25rem;

    .arrow {
      -moz-animation: bounce 2s infinite;
      -webkit-animation: bounce 2s infinite;
      animation: bounce 2s infinite;
      @keyframes bounce {
        0%,
        20%,
        50%,
        80%,
        100% {
          transform: translateX(0);
        }
        40% {
          transform: translateX(1rem);
        }
        60% {
          transform: translateX(0.5rem);
        }
      }
    }
  }

  div {
    width: 20%;
    color: var(--white);

    a {
      cursor: pointer;
      width: 100%;
      border-radius: 4rem;
      padding: 1rem;
      font-size: 1.5rem;
      text-decoration: none;
      color: inherit;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      background: var(--pink);
      transition: background 0.2s ease-in-out;

      &:hover {
        background: ${shade(0.2, pink)};
      }

      &:focus,
      :active,
      :link {
        text-decoration: none;
      }
    }
  }
`;
