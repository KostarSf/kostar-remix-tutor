const posts = [
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
  return posts;
}

export function getPost(id: number) {
  return posts.find((post) => post.id === id);
}
