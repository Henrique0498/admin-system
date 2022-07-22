import { Modal as ModalMui } from '@mui/material'
import { transparentize } from 'polished'
import styled from 'styled-components'

export const Container = styled(ModalMui)`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const CardModal = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  border-radius: 4px;
  padding-right: 0;
  max-height: 90vh;
  overflow: hidden;
`

export const CardModalHead = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid
    ${({ theme }) => transparentize(0.9, theme.colors.black)};
`

export const CardModalBody = styled.div`
  overflow-y: scroll;
  padding: 1rem;
`
