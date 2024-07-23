import { Params } from "@/types/types";

export default function Blog({ params }: Params) {
  return <p>Params: {params.id}</p>
}