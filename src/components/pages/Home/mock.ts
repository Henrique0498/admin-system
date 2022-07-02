import { getColorsGraph } from 'data/mock/colors'
import { transparentize } from 'polished'

export const state = {
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
