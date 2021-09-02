import { getScreenShoot } from "./_lib/getHtml";
import { getHtml } from "./_lib/template";
import { supabase } from "../../utils/supabase";
import { decode } from "base64-arraybuffer";

export default async (req, res) => {
  const { values } = req.body;
  const html = await getHtml(values);
  const file = await getScreenShoot(html, values.fileType);

  const fileName = "uploaded_on_" + Date.now() + "." + values.fileType;

  try {
    const { data, error } = await supabase.storage
      .from("og")
      .upload(`screenhoots/${fileName}`, decode(file), {
        contentType: `image/${values.fileType}`,
      });

      if (error) {
        console.log(error)
         throw error;
      }

    const { signedURL } = await supabase.storage
      .from("og")
      .createSignedUrl(`screenhoots/${fileName}`, 120);

    res.statusCode = 200;
    return res.json({ url: signedURL });
    
  } catch (error) {
    console.log(error);
  }
};
