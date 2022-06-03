/* eslint-disable @typescript-eslint/no-unused-vars */
import theme from 'styles/theme'

const colors = (() => {
  const { black, white, ...result } = { ...theme.colors }

  return result
})()

export type ThemeType = 'dark' | 'light'

export type ColorsType = keyof typeof colors
