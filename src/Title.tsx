import withTitle from "./hoc/withTitle"

function Title({title}:{title:string}) {
  return <h1>{title}</h1>
}

export default withTitle(Title)