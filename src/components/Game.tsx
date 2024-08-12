import { MAX_GRID } from '../helper/config'
import { StyledGame, StyledGameHeader } from '../styles/styled'
import { Board } from './Board'

export const Game = () => {
  return (
    <StyledGame>
      <StyledGameHeader>
        <h1>Lil' Birdie is learning to walk</h1>
        <p>
          Guide Lil' Birdie using the directional keyboard keys or by clicking
          the buttons below.
        </p>
      </StyledGameHeader>
      <Board maxGrid={MAX_GRID} />
    </StyledGame>
  )
}
