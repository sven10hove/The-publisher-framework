import { getPosts } from '@/lib/notion';

export default async function handler(req, res) {
  const { cursor } = req.query;
  const posts = await getPosts(cursor);

  res.status(200).json(posts);
}
