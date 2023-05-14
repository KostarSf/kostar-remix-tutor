import { json } from "@remix-run/node";
import { Link, Outlet, useLoaderData } from "@remix-run/react";
import { getPosts } from "~/fakeDb";

export const loader = () => {
  const posts = getPosts();

  return json({ posts });
}

export default function PostsPage() {
  const { posts } = useLoaderData<typeof loader>();

  return (
    <div style={{ display: "flex" }}>
      <div style={{ marginRight: '2rem'}}>
        {posts.map((post) => (
          <div key={post.id}>
            <Link to={`${post.id}`}>{post.title}</Link>
          </div>
        ))}
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
