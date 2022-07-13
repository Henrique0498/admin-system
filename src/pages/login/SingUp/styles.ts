import styled from 'styled-components'

export const Container = styled.div`
  padding: 16px 32px;
  width: 430px;
`

export const Header = styled.div`
  h2 {
    font-size: 3rem;
    margin: 0;
    padding: 30px 10px 0;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.violet[500]};
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
  }
`

export const Pagination = styled.div`
  display: grid;
  gap: 20px;
`
