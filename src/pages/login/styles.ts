import styled from 'styled-components';
import { shade } from 'polished';

type inputProps = {
  isInvalid: boolean;
};

const pink = '#ff009a';

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    -45deg,
    #1c0473,
    #ff9323,
    #ff009a,
    #350668,
    #1c0473,
    #00ffff,
    #1c0473
  );
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 26rem;
  background: var(--gray);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem;
  gap: 3rem;
  border-radius: 0.75rem;

  img {
    width: 75%;
    background: var(--header);
    border-radius: 0.5rem;
  }

  .formContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;

    div {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }

    button {
      border: none;
      cursor: pointer;
      overflow: hidden;
      outline: none;
      border-radius: 0.5rem;
      background: var(--pink);
      color: var(--white);
      font-weight: 600;
      font-size: 1.75rem;
      line-height: 2.5rem;
      width: 90%;
      padding: 0.75rem 0;
      transition: background 0.2s ease-in-out;

      &:hover {
        background: ${shade(0.2, pink)};
      }
    }
  }
`;

export const Input = styled.input.attrs((props: inputProps) => ({
  border: props.isInvalid === true ? '2px solid #ff0000' : 'none',
}))<inputProps>`
  border-radius: 0.5rem;
  color: #b0b0b0;
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 2.25rem;
  padding: 0.5rem 0.75rem;

  ::placeholder {
    color: #b0b0b0;
  }
`;
