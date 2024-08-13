import { MAX_GRID } from './config'
import { DirectionType, PositionType } from './sharedTypes'

export const calculatePosition = (
  currentPosition: PositionType,
  direction: DirectionType,
  maxGrid = MAX_GRID,
) => {
  let { x, y } = currentPosition

  // Grid column and row starts with 1
  switch (direction) {
    case 'up':
      y = Math.max(1, y - 1)
      break
    case 'down':
      y = Math.min(maxGrid, y + 1)
      break
    case 'left':
      x = Math.max(1, x - 1)
      break
    case 'right':
      x = Math.min(maxGrid, x + 1)
      break
  }

  return { x, y }
}
