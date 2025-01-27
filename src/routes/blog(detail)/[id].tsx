import { useParams } from "@solidjs/router";

export default function BlogDetail() {
  const params = useParams();
  return <h1>Blog {params.id}</h1>;
}
