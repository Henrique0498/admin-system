import { ModalProps } from './types'
import { IoClose } from 'react-icons/io5'

import * as S from './styles'
import Typography from 'components/atoms/Typography'
import ButtonIcon from 'components/atoms/Button/Icon'

const Modal = ({ children, ...props }: ModalProps) => {
  function handleCloseModal() {
    props.close(false)
  }

  return (
    <S.Container open={props.open} onClose={handleCloseModal}>
      <S.CardModal className="bg-gray-50">
        <S.CardModalHead className="shadow-sm">
          <Typography type="h4">Testado tal coisa</Typography>
          <ButtonIcon onClick={handleCloseModal} color="red">
            <IoClose fontSize={24} />
          </ButtonIcon>
        </S.CardModalHead>
        <S.CardModalBody>{children}</S.CardModalBody>
      </S.CardModal>
    </S.Container>
  )
}

export default Modal
