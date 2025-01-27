import { createAsync, query, useParams } from "@solidjs/router";

type Blog = { title: string; id: string };

const getBlog = query(async (id: string) => {
  "use server";
  const response = await fetch(`https://api.vercel.app/blog/${id}`);
  return (await response.json()) as Blog;
}, "blogs");

export const route = {
  preload: () => {
    const params = useParams();
    getBlog(params.id);
  },
};

export default function BlogDetail() {
  const params = useParams();
  const blog = createAsync(() => getBlog(params.id));

  return <h1>{blog()?.title}</h1>;
}
