import { Modal as ModalMui } from '@mui/material'
import styled from 'styled-components'

export const Container = styled(ModalMui)`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Modal = styled.div`
  width: 400px;
  background: ${({ theme }) => theme.colors.gray[50]};
  overflow-y: scroll;
  border-radius: 4px;
  overflow: hidden;
  padding: 1rem;
  padding-right: 0;
  max-height: 90vh;
`
