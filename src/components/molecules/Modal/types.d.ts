import { ModalProps as ModalMuiProps } from '@mui/material'

interface ModalProps extends ModalMuiProps {
  close: Dispatch<React.SetStateAction<boolean>>
  children?: string | ReactNode
}
