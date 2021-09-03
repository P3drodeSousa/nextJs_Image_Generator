import S3 from "../../lib/s3";
import { getScreenShoot } from "./_lib/getHtml";
import { getHtml } from "./_lib/template";

export default async (req, res) => {
  const { values } = req.body;
  const html = await getHtml(values);
  const file = await getScreenShoot(html, values.fileType);

  const fileName = "uploaded_on_" + Date.now() + "." + values.fileType;

  const params = {
    Bucket: "ogimagev2",
    Key: fileName,
    Body: file,
  };

  try {
    S3.upload(params, (error) => {
      if (error) {
        return res.json({
          status: "error",
          error: error.message || "Something went wrong",
        });
      }

      const params = {
        Bucket: "ogimagev2",
        Key: fileName,
        Expires: 60,
      };

      const signedURL = S3.getSignedUrl("getObject", params);

      res.status(200).json({ url: signedURL });
    });
  } catch (error) {
    return res.json({
      status: "error",
      error: error.message || "Something went wrong",
    });
  }
};
