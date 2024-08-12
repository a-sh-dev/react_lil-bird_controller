import styled from 'styled-components'
import { DirectionType } from '../helper/types'
import { sharedStyles as s } from '../styles/sharedStyles'

type ControllerProps = {
  moveBirdie: (direction: DirectionType) => void
}

const StyledControllerWrapper = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin: 1.5rem;
`

const StyledButton = styled.button`
  font-family: monospace;
  font-size: ${s.text.base};
  color: ${s.palette.white};
  background-color: ${s.palette.component.button};
  border-radius: 0.25rem;
  border: 1px solid transparent;
  padding: 0.5em 1.2em;
  box-shadow: ${s.shadow.elevated};
  transition: all 0.2s;

  &:hover {
    background-color: ${s.palette.accent.orange};
    box-shadow: ${s.shadow.pressed};
  }

  &:focus,
  :focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
`

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
