import styled, { css } from 'styled-components'
import { XDirectionType } from '../helper/sharedTypes'
import { sharedStyles as s } from './sharedStyles'

export const StyledLayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100dvh;
  background-image: url('/assets/background-texture-repeat.jpg');
`

export const StyledGame = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-inline: clamp(0.5rem, -1rem + 8vw, 5rem);
`

export const StyledGameHeader = styled.header`
  text-align: center;

  h1 {
    font-size: ${s.text.lg};
    font-weight: 400;
    line-height: 1.1;
    letter-spacing: 0.15em;
    text-transform: uppercase;
  }

  p {
    font-size: ${s.text.base};
  }
`

type StyledBirdieWrapperProps = {
  $x: number
  $y: number
  $xDirection: XDirectionType
}
export const StyledBirdieWrapper = styled.div.attrs<StyledBirdieWrapperProps>({
  role: 'img',
})`
  ${({ $x, $y, $xDirection }) => {
    return css`
      grid-column: ${$x};
      grid-row: ${$y};
      transform: ${$xDirection === 'right' ? 'scaleX(-1)' : 'none'};
    `
  }}
  display: grid;
  place-items: center;
  aspect-ratio: 1;
  padding: 0.5rem;
  transition: transform 0.2s ease-in-out;

  & .svg__birdie {
    font-size: ${s.size.birdie};
    color: ${s.palette.accent.orange};
  }
`

export const StyledBoardWrapper = styled.div`
  margin: 1rem auto;
`
export const StyledBoard = styled.div<{ $maxGrid: number }>(
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

export const StyledControllerWrapper = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin: 1.5rem;
`

export const StyledButton = styled.button`
  font-family: monospace;
  font-size: ${s.text.base};
  color: ${s.palette.white};
  background-color: ${s.palette.component.button};
  border-radius: ${s.radius.sm};
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

export const StyledFooter = styled.footer`
  padding: 0.8rem 0;
  font-size: ${s.text.sm};
  text-align: center;
  color: ${s.palette.grey[300]};
  background-color: ${s.palette.grey[600]};
  width: 100dvw;

  & a {
    text-decoration: inherit;
    font-weight: bold;
    color: ${s.palette.accent.orange};
  }
`
