import { OutlinedTextFieldProps } from '@mui/material'
import { ColorsType } from 'types/system'

export interface InputProps extends OutlinedTextFieldProps {
  colorCustom?: ColorsType
}
