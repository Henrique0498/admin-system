/* eslint-disable @typescript-eslint/no-explicit-any */
import theme from 'styles/theme'
import { ColorsType } from 'types/system'

type GetColorsProps = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900

function instanceOfColors(color: any): color is ColorsType {
  return color
}

function returnOrderColors() {
  const { violet, fuchsia, blue, indigo, sky, ...rest } = theme.colors

  return { violet, fuchsia, blue, indigo, sky, ...rest }
}

export function getColorsGraph(value: GetColorsProps) {
  const namesColors = Object.keys(returnOrderColors())
  const result: string[] = []

  namesColors.map((name) => {
    if (name !== 'black' && name !== 'white' && instanceOfColors(name)) {
      result.push(theme.colors[name][value])
    }
  })

  return result
}
