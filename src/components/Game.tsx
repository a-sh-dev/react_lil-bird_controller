import styled from 'styled-components'
import { MAX_GRID } from '../helper/config'
import { Board } from './Board'
import { Controller } from './Controller'

type Props = {}

const StyledGame = styled.main`
  border: 2px solid green;

  /* width: 50%; */
`

export const Game = (props: Props) => {
  return (
    <StyledGame>
      <header>
        <h1>Lil' Birdie is learning to walk</h1>
        <p>
          Guide Lil' Birdie using the directional keyboard keys or click the
          buttons.
        </p>
      </header>
      <Controller />
      <Board maxGrid={MAX_GRID} />
    </StyledGame>
  )
}
