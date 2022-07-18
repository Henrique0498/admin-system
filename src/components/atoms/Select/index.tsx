import { InputLabel, MenuItem } from '@mui/material'
import { SelectProps } from './types'

import * as S from './styles'

const Select = ({
  value,
  setValue,
  selects,
  labelId,
  error,
  label,
  color
}: SelectProps) => {
  return (
    <S.Container colors={color} error={error ? true : false}>
      <InputLabel id={labelId}>{label}</InputLabel>
      <S.Select
        labelId={labelId}
        value={value}
        label={label}
        onChange={({ target }) => setValue(target.value as string)}
      >
        {selects.map((select) => (
          <MenuItem value={select.value} key={select.value}>
            {select.children}
          </MenuItem>
        ))}
      </S.Select>
    </S.Container>
  )
}

export default Select
