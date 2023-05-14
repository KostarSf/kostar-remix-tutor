import type { ActionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { db } from "~/db.server";

export const action = async ({ request }: ActionArgs) => {
  const formData = await request.formData();

  const title = formData.get("title");
  const content = formData.get("content");

  if (typeof title !== "string" || typeof content !== "string") {
    return json(
      {
        error: "Неверные данные",
      },
      { status: 400 }
    );
  }

  const newPost = await db.post.create({
    data: { title, content },
  });

  return redirect(`/posts/${newPost.id}`);
};

export default function NewPostPage() {
  return (
    <div>
      <Form method='POST' style={{ display: "flex", flexDirection: "column" }}>
        <input type='text' name='title' placeholder='Название' />
        <input type='text' name='content' placeholder='Контент' />
        <button type='submit'>Отправить</button>
      </Form>
    </div>
  );
}
