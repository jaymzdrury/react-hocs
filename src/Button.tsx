import { MouseEventHandler } from 'react'
import withOnClick from './hoc/withOnClick'

function Button({onClick}:{onClick: MouseEventHandler<HTMLButtonElement>}) {
  return <button onClick={onClick}>BUTTON</button>
}

export default withOnClick(Button)