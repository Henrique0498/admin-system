import { CheckIcon } from '@heroicons/react/24/outline'
import { Typography } from '../Typography'
import * as S from './styles'
import { CheckboxProps } from './types'

export function Checkbox({ children }: CheckboxProps) {
  return (
    <S.Container>
      <S.ContainerCheckbox>
        <input
          type="checkbox"
          name="teste"
          className="checkbox"
          id="teste"
          onChange={(e) => console.log(e.target.checked)}
        />

        <S.CustomCheckbox className="custom-checkbox">
          <CheckIcon className="icon_check" />
        </S.CustomCheckbox>
      </S.ContainerCheckbox>

      <Typography className="body">{children}</Typography>
    </S.Container>
  )
}
