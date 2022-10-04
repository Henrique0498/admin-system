import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import theme from '../../../../styles/theme'

import { ButtonOutline } from './index'

describe('<ButtonOutline/>', () => {
  it('should render the heading', () => {
    render(
      <ThemeProvider theme={theme}>
        <ButtonOutline>Button</ButtonOutline>
      </ThemeProvider>
    )

    expect(screen.getByRole('button', { name: /button/i })).toBeInTheDocument()
  })
  it('should render correctly', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <ButtonOutline>Button</ButtonOutline>
      </ThemeProvider>
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
