export interface TypographyProps {
  type: TypesElement
  asComport?: TypesElement
  children: ReactNode
}

type TypesElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h6' | 'p' | 'span'
