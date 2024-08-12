import styled from 'styled-components'
import { MAX_GRID } from '../helper/config'
import { sharedStyles as s } from '../styles/sharedStyles'
import { Board } from './Board'

const StyledGame = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-inline: clamp(0.5rem, -1rem + 8vw, 5rem);
`

const StyledGameHeader = styled.header`
  text-align: center;

  h1 {
    font-size: ${s.text.lg};
    font-weight: 400;
    line-height: 1.1;
    letter-spacing: 0.15em;
    text-transform: uppercase;
  }

  p {
    font-size: ${s.text.base};
  }
`

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
