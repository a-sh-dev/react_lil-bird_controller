import { DirectionType } from '../helper/sharedTypes'
import { StyledButton, StyledControllerWrapper } from '../styles/styled'

type ControllerProps = {
  moveBirdie: (direction: DirectionType) => void
}

export const Controller = ({ moveBirdie }: ControllerProps) => {
  const buttons: { direction: DirectionType; label: string }[] = [
    { direction: 'left', label: '←' },
    { direction: 'up', label: '↑' },
    { direction: 'down', label: '↓' },
    { direction: 'right', label: '→' },
  ]

  return (
    <StyledControllerWrapper>
      {buttons.map(({ direction, label }) => (
        <StyledButton key={direction} onClick={() => moveBirdie(direction)}>
          {label}
        </StyledButton>
      ))}
    </StyledControllerWrapper>
  )
}
