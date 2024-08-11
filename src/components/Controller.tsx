import { Dispatch, SetStateAction } from 'react'
import styled from 'styled-components'
import { DirectionType } from '../helper/types'

type ControllerProps = {
  setDirection: Dispatch<SetStateAction<DirectionType>>
}

const StyledControllerWrapper = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin: 1.5rem;
`

const StyledButton = styled.button`
  background-color: var(--color-pop-orange);
  border-radius: 0.25rem;
  border: 1px solid transparent;
  padding: 0.5em 1.2em;
  font-size: var(--ft-base);
  transition: all ease-in 0.25s;

  &:hover {
    filter: brightness(80%);
  }

  &:focus,
  :focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
`

export const Controller = ({ setDirection }: ControllerProps) => {
  const buttons: { direction: DirectionType; label: string }[] = [
    { direction: 'left', label: '←' },
    { direction: 'up', label: '↑' },
    { direction: 'down', label: '↓' },
    { direction: 'right', label: '→' },
  ]

  return (
    <StyledControllerWrapper>
      {buttons.map(({ direction, label }) => (
        <StyledButton key={direction} onClick={() => setDirection(direction)}>
          {label}
        </StyledButton>
      ))}
    </StyledControllerWrapper>
  )
}
