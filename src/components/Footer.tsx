import styled from 'styled-components'
import { sharedStyles as s } from '../styles/sharedStyles'

const StyledFooter = styled.footer`
  padding: 0.8rem 0;
  font-size: ${s.text.sm};
  text-align: center;
  color: ${s.palette.grey[300]};
  background-color: var(--color-grey-600);
  width: 100dvw;
`

export const Footer = () => {
  return (
    <StyledFooter>
      Crafted with heart by{' '}
      <a
        href="https://github.com/a-sh-dev/react_lil-bird_controller"
        target="_blank"
      >
        a-sh.
      </a>{' '}
      in 2024
    </StyledFooter>
  )
}
