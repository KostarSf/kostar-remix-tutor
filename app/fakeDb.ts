type Post = {
  id: number;
  title: string;
  content: string;
}

declare global {
  var posts: Post[];
}

global.posts = [
  {
    id: 1,
    title: "Как не играть в доту",
    content: "никак",
  },
  {
    id: 2,
    title: "Как не пить пиво",
    content: "не выходить из дома",
  },
  {
    id: 3,
    title: "Как не стать программистом",
    content: "Учить JavaScript",
  },
];

export function getPosts() {
  return global.posts;
}

export function getPost(id: number) {
  return global.posts.find((post) => post.id === id);
}

export function createPost(title: string, content: string) {
  const newPost = { id: posts.length + 1, title, content };
  global.posts.push(newPost);

  return newPost;
}
