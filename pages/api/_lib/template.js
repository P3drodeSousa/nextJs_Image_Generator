import marked from "marked";

export function getHtml(data) {
  const renderTitle = () => {
    if (data.textType === "plainText") return `<p>${data.textInput}</p>`;

    const mark = marked(data.textInput);
    return `${mark}`;
  };

  const renderHTML = () => {
    if (!data.images.length) return "";

    const img = `<div><img src="${data.images[0].url}"  
    width=${data.images[0].width} 
    heigth: ${data.images[0].heigth} /></div>`;

    if (data.images.length === 1) return img;

    const images = data.images.map(
      (img, i) => `
    <div>
    <img src="${img.url}" 
      width=${img.width} 
      heigth: ${img.heigth} />
    </div>
    ${i + 1 !== data.images.length ? `<div><span>+</span></div>` : ""}
  `
    );

    return images.join("");
  };

  return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Thumbnail</title>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap" rel="stylesheet" />

      <style>
          body {
              margin: 0;
              font-family: Roboto, sans-serif;
              color: ${data.theme === "white" ? "black" : "white"};
              background: ${data.theme};
              background-image: ${data.theme === "white"
                ? `radial-gradient(
                    circle at 25px 25px,
                    rgba(0, 0, 0, 0.603) 2%,
                    transparent 0%
                  ),
                  radial-gradient(circle at 75px 75px, rgba(0, 0, 0, 0.65) 2%, transparent 0%)`
                : `radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.2) 2%, transparent 0%), 
                radial-gradient(circle at 75px 75px, rgba(255, 255, 255, 0.2) 2%, transparent 0%)`};
              background-size: 100px 100px;
              height: 100vh;
              padding: 2,5% 5%;
              overflow: hidden;
          }

          #wrapper {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center
          }

          p {
            margin:  ${data.images.length ? "100px 0 0 0" : "auto 0 "};
            font-size: ${data.fontSize}px;
            max-width: 80%;
            padding: 0;
          }


          .images {
              width: auto;
              max-width: 80%;
              display: ${data.images.length ? "flex" : "none"};
              justify-content: space-between;
              align-items: center;
              justify-content: center;
              flex-wrap: wrap;
          }

          span {
              font-size: ${data.fontSize}px;
              margin: 0 50px;
          }

      </style>
    </head>
    <body>
      <div id="wrapper">
        <div class="images">
          ${renderHTML()}
        </div>
        ${renderTitle()}
      </div>
    </body>
    </html>`;
}
