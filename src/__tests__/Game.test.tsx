import { render, screen } from '@testing-library/react'
import { Game } from '../components/Game'

describe('Game', () => {
  const renderGame = () => render(<Game />)

  it('should have heading', () => {
    renderGame()

    expect(screen.getByText(/lil' birdie is learning to walk/i))
  })

  it('should have instruction paragraph', () => {
    renderGame()

    expect(
      screen.getByText(
        /Guide Lil' Birdie using the directional keyboard keys or by clicking the buttons below/i,
      ),
    )
  })
})
