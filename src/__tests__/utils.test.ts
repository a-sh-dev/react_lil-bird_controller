import { DirectionType } from '../helper/sharedTypes'
import { calculatePosition } from '../helper/utils'

describe('calculatePosition', () => {
  const move: Record<DirectionType, DirectionType> = {
    up: 'up',
    down: 'down',
    left: 'left',
    right: 'right',
  }

  it.each([
    [move.up, { x: 3, y: 2 }],
    [move.down, { x: 3, y: 4 }],
    [move.left, { x: 2, y: 3 }],
    [move.right, { x: 4, y: 3 }],
  ])(
    'should move %s correctly - default board size',
    (direction, expectedResult) => {
      const currentPosition = { x: 3, y: 3 }
      const newPosition = calculatePosition(currentPosition, direction)
      expect(newPosition).toEqual(expectedResult)
    },
  )

  it.each([
    [move.up, { x: 15, y: 14 }],
    [move.down, { x: 15, y: 16 }],
    [move.left, { x: 14, y: 15 }],
    [move.right, { x: 16, y: 15 }],
  ])(
    'should move %s correctly - bigger board size',
    (direction, expectedResult) => {
      const currentPosition = { x: 15, y: 15 }
      const maxGrid = 20
      const newPosition = calculatePosition(currentPosition, direction, maxGrid)
      expect(newPosition).toEqual(expectedResult)
    },
  )

  it.each([
    [move.up, { x: 1, y: 1 }, { x: 1, y: 1 }],
    [move.down, { x: 5, y: 5 }, { x: 5, y: 5 }],
    [move.left, { x: 1, y: 1 }, { x: 1, y: 1 }],
    [move.right, { x: 5, y: 5 }, { x: 5, y: 5 }],
  ])(
    'should not move %s beyond the board boundary',
    (direction, currentPosition, expectedResult) => {
      const newPosition = calculatePosition(currentPosition, direction)
      expect(newPosition).toEqual(expectedResult)
    },
  )
})
