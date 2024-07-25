import { PostParams } from "@/types/types";

export default function Blog({ params }: PostParams) {
  return <p>Params: {params.id}</p>
}