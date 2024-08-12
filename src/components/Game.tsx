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

const StyldGameHeader = styled.header`
  h1 {
    font-size: var(--fluid-type-lg);
    font-weight: 400;
    line-height: 1.1;
    letter-spacing: 0.15em;
    text-transform: uppercase;
  }

  p {
    font-size: var(--fluid-type-base);
  }

  footer,
  h1,
  p {
    text-align: center;
  }
`

export const Game = (props: Props) => {
  return (
    <StyledGame>
      <StyldGameHeader>
        <h1>Lil' Birdie is learning to walk</h1>
        <p>
          Guide Lil' Birdie using the directional keyboard keys on desktop or by
          clicking the buttons.
        </p>
      </StyldGameHeader>
      <Board maxGrid={MAX_GRID} />
    </StyledGame>
  )
}
