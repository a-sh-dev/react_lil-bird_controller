import { useCallback, useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import { DirectionType, PositionType, XDirectionType } from '../helper/types'
import { sharedStyles as s } from '../styles/sharedStyles'
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
    background-color: ${s.palette.white};

    border: 1px solid ${s.palette.grey[400]};
    border-radius: ${s.radius.sm};
    min-width: 200px;
  `,
)

export const Board = ({ maxGrid }: BoardProps) => {
  const middlePoint = Math.ceil(maxGrid / 2)

  const [birdie, setBirdie] = useState<PositionType>({
    x: middlePoint,
    y: middlePoint,
  })
  const [xDirection, setXDirection] = useState<XDirectionType>('left')

  const moveBirdie = useCallback(
    (newDirection: DirectionType) => {
      setBirdie((prevDirection) => {
        let newX = prevDirection.x
        let newY = prevDirection.y

        switch (newDirection) {
          case 'up':
            newY = Math.max(1, prevDirection.y - 1)
            break
          case 'down':
            newY = Math.min(maxGrid, prevDirection.y + 1)
            break
          case 'left':
            newX = Math.max(1, prevDirection.x - 1)
            setXDirection('left')
            break
          case 'right':
            newX = Math.min(maxGrid, prevDirection.x + 1)
            setXDirection('right')
            break
        }

        // Only update if the position has changed
        if (newX !== prevDirection.x || newY !== prevDirection.y) {
          return { x: newX, y: newY }
        }
        return prevDirection
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
        <Birdie x={birdie.x} y={birdie.y} xDirection={xDirection} />
      </StyledBoard>
      <Controller moveBirdie={moveBirdie} />
    </StyledBoardWrapper>
  )
}
