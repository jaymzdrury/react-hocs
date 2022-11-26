import {ComponentType, MouseEventHandler} from 'react'

type OnClick = {
  onClick: MouseEventHandler<HTMLButtonElement>
}

function withOnClick<P>(Component: ComponentType<P&OnClick>) {
    const onClick = () => console.log('click')
    const ComponentWithOnClick = (props: P) => <Component {...props} onClick={onClick} />
    return ComponentWithOnClick
}

export default withOnClick