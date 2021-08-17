import { getImages } from "./_lib/getHtml";

export default async (req, res) => {
  const query = req.query;

  const imgs = await getImages(query);

  res.statusCode = 200;
  return res.send({ imgs });
};
