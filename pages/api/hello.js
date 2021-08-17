import { getScreenShoot } from "./_lib/getHtml";
import { getHtml } from "./_lib/template";

export default async (req, res) => {
  const { values } = req.body;

  const html = await getHtml(values);
  const imgUrl = await getScreenShoot(html, values.fileType);

  res.statusCode = 200;
  return res.send({ url: imgUrl });
};
