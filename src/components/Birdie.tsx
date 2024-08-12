import { PositionType, XDirectionType } from '../helper/sharedTypes'
import { StyledBirdieWrapper } from '../styles/styled'
import { BirdieSVG } from './Svgs'

type BirdieProps = PositionType & {
  xDirection: XDirectionType
}

export const Birdie = ({ x, y, xDirection }: BirdieProps) => {
  return (
    <StyledBirdieWrapper $x={x} $y={y} $xDirection={xDirection}>
      <BirdieSVG />
    </StyledBirdieWrapper>
  )
}
