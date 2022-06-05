import { useState } from 'react'
import { transparentize } from 'polished'
import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

import Button from 'components/atoms/Button'
import { getColorsGraph } from 'data/mock/colors'

import * as S from './styles'

const HomeTemplate = () => {
  const [active, setActive] = useState(false)

  function handleClick() {
    setActive(!active)
  }

  const state = {
    series: [
      {
        name: 'XYZ MOTORS',
        data: [25, 26, 45, 48, 35, 21, 50]
      }
    ],
    options: {
      chart: {
        stacked: false,
        height: 350,
        zoom: {
          enabled: false
        }
      },
      colors: getColorsGraph(700),
      grid: {
        show: true,
        borderColor: transparentize(0.8, '#000000'),
        strokeDashArray: 0,
        position: 'back'
      },
      dataLabels: {
        enabled: false
      },
      markers: {
        size: 0
      },
      title: {},
      fill: {
        colors: getColorsGraph(700)
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
      }
    }
  }
  //   yaxis: {
  //     labels: {
  //       formatter: function (val) {
  //         return (val / 1000000).toFixed(0)
  //       }
  //     },
  //     title: {
  //       text: 'Price'
  //     }
  //   },
  //   xaxis: {
  //     type: 'datetime'
  //   },
  //   tooltip: {
  //     shared: false,
  //     y: {
  //       formatter: function (val) {
  //         return (val / 1000000).toFixed(0)
  //       }
  //     }
  //   }

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
