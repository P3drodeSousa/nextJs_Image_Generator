// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getScreeShoot } from "./_lib/getHtml"
import {  getHtml } from "./_lib/template";

export default  async  (req, res) => {
  const {textInput, theme} = JSON.parse(req.body);
  // console.log(textInput)

  const html = await getHtml(textInput);
  await getScreeShoot(html); 
  
  res.statusCode = 200
  res.end('oui')
}
