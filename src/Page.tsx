import withAuth from "./hoc/withAuth"

function Page({auth}:{auth: boolean}){
  return <div>{auth ? 'Welcome to Page' : 'Not Authorized'}</div>
}

export default withAuth(Page)