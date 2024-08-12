import { render, screen } from '@testing-library/react'
import { Board } from '../components/Board'

describe('Board', () => {
  const renderBoard = () => render(<Board maxGrid={5} />)

  it('should have Birdie icon visible', async () => {
    renderBoard()

    const birdie = screen.getByRole('img')
    expect(birdie).toBeVisible()
  })

  it('should have controller buttons', () => {
    renderBoard()

    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(4)
  })
})
