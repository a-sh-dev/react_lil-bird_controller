import { useCallback, useEffect, useState } from 'react'
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

  const moveBirdie = useCallback(
    (direction: DirectionType) => {
      setBirdie((prev) => {
        let newX = prev.x
        let newY = prev.y

        switch (direction) {
          case 'up':
            newY = Math.max(1, prev.y - 1)
            break
          case 'down':
            newY = Math.min(maxGrid, prev.y + 1)
            break
          case 'left':
            newX = Math.max(1, prev.x - 1)
            break
          case 'right':
            newX = Math.min(maxGrid, prev.x + 1)
            break
        }

        // Only update if the position has changed
        if (newX !== prev.x || newY !== prev.y) {
          console.log({ x: newX, y: newY })

          return { x: newX, y: newY }
        }
        console.log(prev)
        return prev
      })
    },
    [maxGrid],
  )

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowUp':
          moveBirdie('up')
          break
        case 'ArrowDown':
          moveBirdie('down')
          break
        case 'ArrowLeft':
          moveBirdie('left')
          break
        case 'ArrowRight':
          moveBirdie('right')
          break
      }
    }

    window.addEventListener('keydown', handleKeyPress)

    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [moveBirdie])

  return (
    <StyledBoardWrapper>
      <StyledBoard $maxGrid={maxGrid}>
        <Birdie x={birdie.x} y={birdie.y} direction={direction} />
      </StyledBoard>
      <Controller moveBirdie={moveBirdie} />
    </StyledBoardWrapper>
  )
}
