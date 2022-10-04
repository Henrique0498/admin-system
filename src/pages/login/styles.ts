import styled, { css } from 'styled-components'

interface SingContainerProps {
  path: 'singIn' | 'singUp'
}

export const Container = styled.div`
  min-height: 100vh;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  position: relative;
  background-color: ${({ theme }) => theme.colors.gray[200]};
  background-image: url('/img/background/login.svg');
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position: 100% 100%;
`

export const RecoverPassword = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.gray[100]};
  border-radius: 4px;
  width: 860px;
  height: 400px;
  top: calc(50vh - 330px);
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
  grid-template-areas: 'container';
  position: absolute;

  & > div {
    grid-area: container;
    display: flex;
    align-items: center;
    transition: all ${({ theme }) => theme.animation.duration.xxSlow};
    z-index: 1;
    width: 100%;
    height: 100%;
    opacity: 0;

    > * {
      width: 50%;
    }
  }

  & > div.active {
    z-index: 2;
    opacity: 1;
  }
`

export const ContainerMobileLogin = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 700px;
`

export const Background = styled.div`
  color: ${({ theme }) => theme.colors.purple[200]};
  height: calc(100% - 2rem);
  left: 1rem;
  position: absolute;
  top: 1rem;
  width: calc(100% - 2rem);
  z-index: -1;

  .background-icon_top_right {
    position: absolute;
    right: 0;
    top: 0;
  }

  .background-icon_bottom_left {
    bottom: 0;
    left: 0;
    position: absolute;
    transform: rotate(180deg);
  }
`

export const LoginMobileCard = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.gray[50]};
  text-align: center;

  > p {
    padding: 1rem 0 1.5rem;
  }

  &.active {
    z-index: 100;
  }

  &.disabled {
    transform: rotate3d(1, 1, 0, -180deg) scale(0.1);
    z-index: 1;
  }

  &.first {
    animation: flip-start 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
  }

  &.two {
    animation: flip-end 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
  }

  @keyframes flip-start {
    0% {
      transform: rotate3d(1, 1, 0, -180deg) scale(0.1);
      z-index: 1;
    }
    100% {
      transform: rotate3d(1, 1, 0, 0deg) scale(1);
      z-index: 100;
    }
  }

  @keyframes flip-end {
    0% {
      transform: rotate3d(1, 1, 0, 0deg) scale(1);
      z-index: 100;
    }
    100% {
      transform: rotate3d(1, 1, 0, 180deg) scale(0.1);
      z-index: 1;
    }
  }
`

export const LoginDesktopCard = styled.div`
  height: 595px;
  display: flex;
  justify-content: center;
  position: relative;
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
