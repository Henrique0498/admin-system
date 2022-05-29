import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const SizeLoading = styled.div`
  width: 60%;
  display: flex;
  max-width: 200px;
  justify-content: space-between;

  div:nth-child(1) {
    ::before {
      animation-delay: 0s;
    }
  }

  div:nth-child(2) {
    ::before {
      animation-delay: 0.2s;
    }
  }

  div:nth-child(3) {
    ::before {
      animation-delay: 0.4s;
    }
  }
`

export const Loader = styled.div`
  width: 25%;
  display: flex;

  ::before {
    content: '';
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    border-radius: 50%;
    background: currentColor;
    animation: loader 1.2s infinite;
    left: 0px;
  }

  @keyframes loader {
    50% {
      transform: translateY(-100%);
    }
  }
`
