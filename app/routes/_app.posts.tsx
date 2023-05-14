import { json } from "@remix-run/node";
import { Link, Outlet, useLoaderData } from "@remix-run/react";
import { db } from "~/db.server";

export const loader = async () => {
  const posts = await db.post.findMany();

  return json({ posts });
};

export default function PostsPage() {
  const { posts } = useLoaderData<typeof loader>();

  return (
    <div style={{ display: "flex" }}>
      <div style={{ marginRight: "2rem" }}>
        <Link to='new' style={{ marginBottom: "2rem", display: "block" }}>
          + Создать пост
        </Link>
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
