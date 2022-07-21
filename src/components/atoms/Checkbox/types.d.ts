export interface CheckboxProps extends CheckboxProps {
  children?: string | React.ReactNode
  onChange?: (value: boolean) => void
  checked?: boolean
}
