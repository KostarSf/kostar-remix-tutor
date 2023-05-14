import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { db } from "~/db.server";

export const loader = async ({ params }: LoaderArgs) => {
  const postId = Number(params.postId);

  const post = await db.post.findUnique({
    where: { id: postId }
  })

  if (!post) throw json({}, { status: 404 });

  return json({ post });
};

export default function PostPage() {
  const { post } = useLoaderData<typeof loader>();

  return (
    <div>
      <h1 style={{ lineHeight: "1" }}>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
