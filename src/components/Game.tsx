import styled from 'styled-components'
import { MAX_GRID } from '../helper/config'
import { Board } from './Board'

type Props = {}

const StyledGame = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-inline: clamp(0.5rem, -1rem + 8vw, 5rem);
`

export const Game = (props: Props) => {
  return (
    <StyledGame>
      <header>
        <h1>Lil' Birdie is learning to walk</h1>
        <p>
          Guide Lil' Birdie using the directional keyboard keys on desktop or by
          clicking the buttons.
        </p>
      </header>
      <Board maxGrid={MAX_GRID} />
    </StyledGame>
  )
}
