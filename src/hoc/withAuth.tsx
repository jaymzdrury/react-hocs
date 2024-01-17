import {ComponentType} from 'react'

type Auth = {
  auth: boolean
}

function withAuth<P>(Component: ComponentType<P&Auth>) {
  const auth = false
  const ComponentWithAuth = (props: P) => <Component {...props} auth={auth} />
  return ComponentWithAuth
}

export default withAuth