type Params = {
  params: {
    id: string
  }
}

export default function Blog({ params }: Params) {
  return <p>Params: {params.id}</p>
}