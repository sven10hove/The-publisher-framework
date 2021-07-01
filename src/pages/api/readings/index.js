import { getReadings } from '@/lib/notion';

export default async function handler(req, res) {
  const { cursor } = req.query;
  const readings = await getReadings(cursor);

  res.status(200).json(readings);
}
