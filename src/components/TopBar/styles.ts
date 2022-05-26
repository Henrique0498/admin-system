import styled from 'styled-components'

export const Container = styled.nav`
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  box-shadow: ${({ theme }) => theme.shadow.xSmall};

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0 10px;
    gap: 10px;
    cursor: pointer;

    h2 {
      font-size: 2.4rem;
      background: linear-gradient(
        90deg,
        ${({ theme }) => theme.colors.emerald[500]} 50%,
        ${({ theme }) => theme.colors.emerald[600]} 50%
      );
      background-size: 200%;
      transition: all ${({ theme }) => theme.animation.duration.xxSlow};
      background-position: 0%;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    :hover {
      h2 {
        background-position: 100%;
        transition: all ${({ theme }) => theme.animation.duration.xxSlow};
      }
    }

    .icon {
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      font-size: 3.2rem;
      color: ${({ theme }) => theme.colors.emerald[500]};
      border: 2px solid currentColor;
      transition: all 0.8s;
      perspective: 800px;

      ::after {
        content: '';
        width: 2px;
        height: 30px;
        position: absolute;
        box-shadow: 2px 0 currentColor, -2px 0 currentColor;
      }
    }

    &:hover {
      .icon {
        transition: all 0.8s;
        transform: rotate3d(10, 10, 10, 360deg);
        color: ${({ theme }) => theme.colors.emerald[600]};
      }
    }
  }
`
