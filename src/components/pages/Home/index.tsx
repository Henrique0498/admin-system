import { useState } from 'react'
import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

import Button from 'components/atoms/Button'

import * as S from './styles'
import { state } from './mock'

const HomeTemplate = () => {
  const [active, setActive] = useState(false)

  function handleClick() {
    setActive(!active)
  }

  return (
    <S.Container>
      <S.CardLarge className="w-ful bg-gray-50 dark:bg-gray-800 rounded-md shadow-sm hover:shadow-md relative">
        <S.Title>Rendimento Mensal</S.Title>
        <S.SubTitle>Total</S.SubTitle>
        <S.Button active={active}>
          <Button onClick={handleClick}>Ultima Semana</Button>
          <Button onClick={handleClick}>Ultimo Mês</Button>
        </S.Button>

        <S.Graph>
          <Chart type="area" options={state.options} series={state.series} />
        </S.Graph>
      </S.CardLarge>
    </S.Container>
  )
}

export default HomeTemplate
