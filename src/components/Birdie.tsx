import styled, { css } from 'styled-components'
import { PositionType, XDirectionType } from '../helper/types'
import { sharedStyles as s } from '../styles/sharedStyles'
import { BirdieSVG } from './Svgs'

type BirdieProps = PositionType & {
  xDirection: XDirectionType
}

type StyledBirdieWrapperProps = {
  $x: number
  $y: number
  $isFlipped?: boolean
  $xDirection: XDirectionType
}

const StyledBirdieWrapper = styled.div.attrs<StyledBirdieWrapperProps>({
  role: 'img',
})`
  ${({ $x, $y, $xDirection: $direction }) => {
    return css`
      grid-column: ${$x};
      grid-row: ${$y};
      transform: ${$direction === 'right' ? 'scaleX(-1)' : 'none'};
    `
  }}
  display: grid;
  place-items: center;
  aspect-ratio: 1;
  padding: 0.5rem;
  transition: transform 0.2s ease-in-out;

  & .svg__birdie {
    font-size: ${s.size.birdie};
    color: ${s.palette.accent.orange};
  }
`

export const Birdie = ({ x, y, xDirection }: BirdieProps) => {
  return (
    <StyledBirdieWrapper $x={x} $y={y} $xDirection={xDirection}>
      <BirdieSVG />
    </StyledBirdieWrapper>
  )
}
