import { getScreeShoot } from "./_lib/getHtml"
import {  getHtml } from "./_lib/template";

export default  async  (req, res) => {
  const {textInput, theme} = JSON.parse(req.body);
  console.log(req.body);


  // const html = await getHtml(textInput);
  // const imgUrl = await getScreeShoot(html); 
  
  res.statusCode = 200;
  res.send({ url: "0b75bf34-7c1e-4610-b941-11f9b1647626.png" });
}
