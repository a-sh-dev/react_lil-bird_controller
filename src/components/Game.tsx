import { Board } from './Board'

type Props = {}

export const Game = (props: Props) => {
  return (
    <main>
      <h1>Lil' Birdie is learning to walk</h1>
      <p>
        Help guide Lil' Birdie using the directional keyboard keys or clicking
        the buttons.
      </p>
      <Board />
    </main>
  )
}
