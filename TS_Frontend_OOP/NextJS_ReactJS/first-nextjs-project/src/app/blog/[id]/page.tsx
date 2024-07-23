type Param = {
  param: {
    id: number
  }
}

export default function Blog({ param }: Param) {
  return <p>Param: {param.id}</p>
}