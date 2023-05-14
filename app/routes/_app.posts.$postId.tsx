import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getPost } from "~/fakeDb";

export const loader = ({ params }: LoaderArgs) => {
  const post = getPost(Number(params.postId));

  if (!post) throw json({}, { status: 404 });

  return json({ post });
};

export default function PostPage() {
  const { post } = useLoaderData<typeof loader>();

  return (
    <div>
      <h1 style={{ lineHeight: "1" }}>{post.title}</h1>
      <p>{post.title}</p>
    </div>
  );
}
