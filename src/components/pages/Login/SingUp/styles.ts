import styled from 'styled-components'

export const Container = styled.div`
  padding: 16px 0;
  width: 100%;

  ul.slick-dots {
    button {
      border-radius: 3px;
      background: ${({ theme }) => theme.colors.blue[500]};
      width: 5px;
    }

    li.slick-active {
      button {
        border-radius: 3px;
        width: 5px;
        background: ${({ theme }) => theme.colors.purple[500]};
      }
    }
  }
`

export const Header = styled.div`
  padding: 0 32px;

  h2 {
    font-size: 3rem;
    margin: 0;
    padding: 30px 10px 0;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.violet[500]};
  }

  @media (max-width: 600px) {
    h2 {
      padding: 30px 0px 0;
      font-size: 10vw;
    }
  }
`

export const FirebaseContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px;
`

export const FirebaseIcon = styled.button`
  padding: 10px;
  background: #fff;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.gray[400]};
  color: ${({ theme }) => theme.colors.gray[400]};
  font-size: 24px;
  margin: 0 10px;
  transition: ${({ theme }) => theme.animation.duration.medium};

  :hover {
    color: ${({ theme }) => theme.colors.violet[500]};
    border-color: ${({ theme }) => theme.colors.violet[600]};
  }
`

export const Body = styled.form`
  .containerButton {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;

    > * {
      position: absolute;

      :first-child {
        display: none;
      }

      :last-child {
        display: inherit;
      }
    }

    &.one {
      > * {
        :first-child {
          display: inherit;
        }

        :last-child {
          display: none;
        }
      }
    }
  }
`

export const Pagination = styled.div`
  height: 272px;
  padding: 32px;
  display: grid;
  gap: 20px;
`
export const Confirm = styled.div`
  height: 76px;
  display: flex;
  align-items: end;
`
