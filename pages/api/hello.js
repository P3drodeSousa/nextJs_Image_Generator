import { getScreenShoot } from "./_lib/getHtml";
import { getHtml } from "./_lib/template";

//Gray-matter
// marked

export default async (req, res) => {
  const infos = JSON.parse(req.body);

  const html = await getHtml(infos);
  const imgUrl = await getScreenShoot(html, infos.infos.fileType);

  res.statusCode = 200;
  res.send({ url: imgUrl });
};
