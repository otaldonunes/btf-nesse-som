import styled from 'styled-components';

export const Container = styled.article`
  display: flex;
  gap: 1rem;
  margin: 1rem 0;

  img {
  }

  div {
    padding-left: 0.1rem;
    letter-spacing: 0.1rem;
    color: var(--black);
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    h1 {
      font-weight: 700;
      font-size: 1.5rem;
    }

    h3 {
      font-weight: 300;
      font-size: 0.875rem;
    }

    p {
      font-weight: 500;
      font-size: 1rem;
    }

    .listen {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      h4 {
        font-weight: 500;
        font-size: 1rem;
      }

      a {
        color: inherit;
        text-decoration: inherit;
        transition: transform 0.2s ease-in-out;

        &:hover {
          transform: scale(1.2);
        }
      }
    }
  }
`;
