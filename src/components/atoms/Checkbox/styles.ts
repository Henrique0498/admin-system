import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  .body {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }
`

export const ContainerCheckbox = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .checkbox {
    opacity: 0;
    position: absolute;
    width: 1rem;
    height: 1rem;
    cursor: pointer;
  }

  .checkbox:checked ~ .custom-checkbox {
    background: ${({ theme }) => theme.colors.purple[500]};
    color: ${({ theme }) => theme.colors.purple[600]};
  }

  .checkbox:hover ~ .custom-checkbox {
    color: ${({ theme }) => theme.colors.purple[500]};

    ::before {
      width: 1.5rem;
      height: 1.5rem;
    }
  }

  .checkbox:checked ~ .custom-checkbox {
    .icon_check {
      color: ${({ theme }) => theme.colors.purple[100]};
      visibility: visible;
      width: 1rem;
    }
  }
`

export const CustomCheckbox = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 0.25rem;
  color: ${({ theme }) => theme.colors.gray[500]};
  border: 1px solid currentColor;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all ${({ theme }) => theme.animation.duration.medium} linear;
  cursor: pointer;

  ::before {
    content: '';
    width: 0px;
    height: 0px;
    background: ${({ theme }) => theme.colors.purple[200]};
    position: absolute;
    z-index: -1;
    transition: all ${({ theme }) => theme.animation.duration.xFast} linear;
    border-radius: 50%;
  }

  .icon_check {
    visibility: hidden;
    transition: all ${({ theme }) => theme.animation.duration.medium} linear;
    width: 0rem;
  }
`
