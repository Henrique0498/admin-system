import * as S from './styles'
import { CheckboxProps } from './types'

export function Checkbox({ children }: CheckboxProps) {
  return (
    <S.Container>
      <input
        type="checkbox"
        name="teste"
        id="teste"
        onChange={(e) => console.log(e)}
      />
      {children}
    </S.Container>
  )
}
