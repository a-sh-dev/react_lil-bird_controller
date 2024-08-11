import styled, { css } from 'styled-components'
import { DirectionType, PositionType } from '../helper/types'
import { BirdieSVG } from './Svgs'

type BirdieProps = PositionType & {
  direction: DirectionType
}

type StyledBirdieWrapperProps = {
  $x: number
  $y: number
  $isFlipped: boolean
}

const StyledBirdieWrapper = styled.div.attrs<StyledBirdieWrapperProps>({
  role: 'img',
})`
  ${({ $x, $y }) => {
    return css`
      grid-column: ${$x};
      grid-row: ${$y};

      /* transform: scaleX(-1); */
      /* transform-origin: center; */
    `
  }}
  display: grid;
  place-items: center;
  aspect-ratio: 1;
  padding: 0.5rem;

  /* border: 1px solid red; */

  & .svg__birdie {
    font-size: var(--ft-birdie);
    color: var(--color-pop-orange);
    /* transform: scaleX(-1); */
  }
`

export const Birdie = ({ x, y, direction }: BirdieProps) => {
  const isFlipped = direction === 'right' || direction === 'left'

  return (
    <StyledBirdieWrapper $x={x} $y={y} $isFlipped={isFlipped}>
      <BirdieSVG />
    </StyledBirdieWrapper>
  )
}
