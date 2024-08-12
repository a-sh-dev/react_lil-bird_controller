export type DirectionType = 'right' | 'left' | 'up' | 'down'
export type XDirectionType = Extract<DirectionType, 'right' | 'left'>
export type PositionType = {
  x: number
  y: number
}
