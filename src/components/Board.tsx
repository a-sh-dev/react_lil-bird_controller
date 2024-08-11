import { useState } from 'react'
import styled, { css } from 'styled-components'
import { DirectionType, PositionType } from '../helper/types'
import { Birdie } from './Birdie'
import { Controller } from './Controller'

type BoardProps = {
  maxGrid: number
}

const StyledBoardWrapper = styled.div`
  margin: 1rem auto;
`

const StyledBoard = styled.div<{ $maxGrid: number }>(
  ({ $maxGrid }) => css`
    display: grid;
    grid-template-columns: repeat(${$maxGrid}, minmax(30px, 1fr));
    grid-template-rows: repeat(${$maxGrid}, minmax(30px, 1fr));
    background-color: var(--color-white);
    /* margin: 0 auto; */

    border: 1px solid var(--color-grey-400);
    /* max-width: 500px;
    min-width: 200px; */
  `,
)

export const Board = ({ maxGrid }: BoardProps) => {
  const middlePoint = Math.ceil(maxGrid / 2)

  const [birdie, setBirdie] = useState<PositionType>({
    x: middlePoint,
    y: middlePoint,
  })
  const [direction, setDirection] = useState<DirectionType>('right')

  console.log(direction)

  return (
    <StyledBoardWrapper>
      <StyledBoard $maxGrid={maxGrid}>
        <Birdie x={birdie.x} y={birdie.y} direction={direction} />
      </StyledBoard>
      <Controller setDirection={setDirection} />
    </StyledBoardWrapper>
  )
}
