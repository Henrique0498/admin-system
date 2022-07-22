interface ModalProps {
  close: Dispatch<React.SetStateAction<boolean>>
  titleHeader: string
  children?: string | ReactNode
  size?: 'small' | 'medium' | 'large'
}
