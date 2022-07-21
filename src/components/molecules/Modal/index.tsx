import { ModalProps } from './types'

import * as S from './styles'

const Modal = ({ children, ...props }: ModalProps) => {
  return (
    <S.Container open={props.open} onClose={() => props.close(false)}>
      <S.Modal>{children}</S.Modal>
    </S.Container>
  )
}

export default Modal
