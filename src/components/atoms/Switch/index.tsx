import * as S from './styles'

interface SwitchProps {
  id: string
  onClick: () => void
  value: boolean
  valueOn?: React.ReactNode
  valueOff?: React.ReactNode
}

const Switch = ({ onClick, id, value, valueOn, valueOff }: SwitchProps) => {
  return (
    <S.Container
      value={value}
      htmlFor={id}
      className="inline-flex items-center cursor-pointer relative text-gray-200"
    >
      <span className="background block w-16 h-9 bg-gray-200 dark:bg-gray-900 transition-all rounded-full shadow-inner" />
      <span className="switch absolute block w-7 h-7 bg-violet-500 dark:bg-violet-6transition-all00 rounded-full shadow">
        <input
          id={id}
          type="checkbox"
          className="absolute opacity-0 w-0 h-0"
          onClick={onClick}
        />
        {value && valueOn ? valueOn : valueOff && valueOff}
      </span>
    </S.Container>
  )
}

export default Switch
