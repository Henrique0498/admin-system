import { ButtonHTMLAttributes } from 'react'
import { ColorsType } from 'types/system'
import { TypeTypographyElement } from '../Typography/types'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string | React.ReactNode
  color?: ColorsType
  size?: 'small' | 'medium' | 'large'
}

export interface TypeButtonLink extends ButtonProps {
  typeText?: TypeTypographyElement
}

export interface TypeStylesButtonLink {
  typeText: TypeTypographyElement
  color: ColorsType
}
