import { createAsync, query } from "@solidjs/router";
import { For } from "solid-js";

type Blog = { title: string; id: string };

const getBlogList = query(async () => {
  "use server";
  const response = await fetch("https://api.vercel.app/blog");
  return (await response.json()) as Blog[];
}, "blogs");

export const route = {
  preload: () => getBlogList(),
};

export default function BlogList() {
  const blogs = createAsync(() => getBlogList());

  return (
    <>
      <h1>Blog List</h1>
      <ul>
        <For each={blogs()}>
          {(blog) => (
            <li>
              <a href={`/blog/${blog.id}`}>{blog.title}</a>
            </li>
          )}
        </For>
      </ul>
    </>
  );
}
