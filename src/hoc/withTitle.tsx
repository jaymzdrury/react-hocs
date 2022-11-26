import {ComponentType} from 'react'

type Title = {
  title: string
}

function withTitle<P>(Component: ComponentType<P&Title>) {
  const title = 'Page'
  const ComponentWithTitle = (props: P) => <Component {...props} title={title} />
  return ComponentWithTitle
}

export default withTitle