import styled, { css } from 'styled-components'

interface SingContainerProps {
  path: 'singIn' | 'singUp'
}

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  position: relative;
  background-color: ${({ theme }) => theme.colors.gray[200]};
  background-image: url('/img/background/login.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 100% 100%;
`

export const RecoverPassword = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.gray[100]};
  border-radius: 4px;
  width: 860px;
  height: 400px;
  top: calc(50vh - 310px);
  transform: scale(0.9);
`

export const SingContainer = styled.div<SingContainerProps>`
  ${({ path }) => css`
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.gray[50]} 33.333%,
      ${({ theme }) => theme.colors.violet[600]} 33.333%,
      ${({ theme }) => theme.colors.violet[600]} 66.666%,
      ${({ theme }) => theme.colors.gray[50]} 66.666%
    );
    background-size: 150%;
    background-position: ${path === 'singIn' ? '0%' : '100%'};
  `}
  border-radius: 4px;
  overflow: hidden;
  transition: all 0.5s;
  display: grid;
  align-items: center;
  grid-template-areas: 'container';
  position: absolute;

  & > div {
    grid-area: container;
    display: grid;
    grid-template-columns: 1fr 1fr;
    transition: all ${({ theme }) => theme.animation.duration.xxSlow};
    z-index: 1;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  & > div.active {
    z-index: 2;
    opacity: 1;
  }
`

export const SingInCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  user-select: none;
  color: ${({ theme }) => theme.colors.white};

  h2 {
    font-size: 1.75rem;
    color: currentColor;
  }

  p {
    padding: 1rem 0 2rem;
    margin: 0;
  }

  button {
    border-color: white;
    color: white;
    background: linear-gradient(90deg, transparent 50%, white 50%);
    background-size: 220%;
    background-position-y: bottom;

    :hover {
      background-position-x: 95%;
      background-position-y: top;
      color: ${({ theme }) => theme.colors.violet[600]};
    }
  }
`

export const Toasty = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
`
