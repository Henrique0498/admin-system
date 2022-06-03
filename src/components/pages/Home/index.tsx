import { Line } from 'react-chartjs-2'
import * as S from './styles'
import { transparentize } from 'polished'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  BarElement
} from 'chart.js'
import { getColorsGraph } from 'data/mock/colors'
import Button from 'components/atoms/Button'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  BarElement
)

const HomeTemplate = () => {
  const data = {
    data: {
      labels: ['', '', '', '', '', ''],
      datasets: [
        {
          label: '# of Votes',
          data: [12, 19, 30, 50, 20, 30],
          backgroundColor: transparentize(0.3, getColorsGraph(600)[0]),
          fill: true,
          borderColor: getColorsGraph(600)[0],
          borderWidth: 1
        }
      ]
    },
    options: {
      layout: {
        padding: -24
      },
      plugins: {
        legend: {
          display: false
        }
      },

      tooltips: {
        callbacks: {
          label: function (tooltipItem: { yLabel: undefined }) {
            return tooltipItem.yLabel
          }
        }
      },
      responsive: true,
      maintainAspectRatio: true,
      aspectRatio: 2
    }
  }

  function handleClick() {
    console.log('teste')
  }

  return (
    <S.Container>
      <S.CardLarge className="w-ful bg-gray-50 dark:bg-gray-800 rounded-md shadow-sm hover:shadow-md relative">
        <S.Title>Rendimento Mensal</S.Title>
        <S.Describe>Total</S.Describe>
        <S.Button>
          <Button onClick={handleClick}>teste</Button>
          <Button onClick={handleClick}>teste</Button>
        </S.Button>

        <S.Graph>
          <Line {...data} />
        </S.Graph>
      </S.CardLarge>
    </S.Container>
  )
}

export default HomeTemplate
