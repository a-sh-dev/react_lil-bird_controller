import { useCallback, useEffect, useState } from 'react'
import { KEYBOARD_KEY } from '../helper/config'
import {
  DirectionType,
  PositionType,
  XDirectionType,
} from '../helper/sharedTypes'
import { calculatePosition } from '../helper/utils'
import { StyledBoard, StyledBoardWrapper } from '../styles/styled'
import { Birdie } from './Birdie'
import { Controller } from './Controller'

type BoardProps = {
  maxGrid: number
}

export const Board = ({ maxGrid }: BoardProps) => {
  const centerPosition = Math.ceil(maxGrid / 2)

  const [birdie, setBirdie] = useState<PositionType>({
    x: centerPosition,
    y: centerPosition,
  })
  const [xDirection, setXDirection] = useState<XDirectionType>('left')

  const moveBirdie = useCallback(
    (newDirection: DirectionType) => {
      setBirdie((prevDirection) => {
        const newPosition = calculatePosition(prevDirection, newDirection)

        if (newDirection === 'left' || newDirection === 'right') {
          setXDirection(newDirection)
        }

        return newPosition
      })
    },
    [maxGrid],
  )

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      switch (e.key) {
        case KEYBOARD_KEY.up:
          moveBirdie('up')
          break
        case KEYBOARD_KEY.down:
          moveBirdie('down')
          break
        case KEYBOARD_KEY.left:
          moveBirdie('left')
          break
        case KEYBOARD_KEY.right:
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
