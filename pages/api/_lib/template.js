
//TODO FInd the "virgule" ;)
// TODO Center Title

export function getHtml(data) {

    const renderHTML = () => {
      const img = `<div><img src="${data.images[0].url}"  
        width=${data.images[0].width} 
        heigth: ${data.images[0].heigth} /></div>`;

      if(data.images.length ===  1) {
        return img
      }
      
      return data.images.map(
        (img, i) =>
         `<div>
            <span class=${i === 0 ? "first" : null}>+</span>
          </div>
          <div><img src="${img.url}" 
            width=${img.width} 
            heigth: ${img.heigth} />
          </div>`
      );
    }

    return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      
      <title>Thumbnail</title>
    
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap" rel="stylesheet">
    
      <style>
          body {
              margin: 0;
              font-family: Roboto, sans-serif;
              color: ${data.infos.theme === "white" ? "black" : "white"};
              background: ${data.infos.theme};
              background-image: radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.2) 2%, transparent 0%), 
              radial-gradient(circle at 75px 75px, rgba(255, 255, 255, 0.2) 2%, transparent 0%);
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

          h1 {
              font-size: ${data.infos.fontSize}px;
              max-width: 80%;
          }

          .images {
              height: auto;
              width: 100%;
              display: ${data.images.length ? 'flex': 'none'};
              justify-content: space-around;
              align-items: center;
          }

          span {
              font-size: ${data.infos.fontSize - data.infos.fontSize * 0.4}px;
          }

          span.first {
            display: none;
          }

      </style>
    </head>
    <body>
      <div id="wrapper">
        <div class="images">
          ${renderHTML()}
        </div>
        <h1>${data.infos.textInput}</h1>
      </div>
    </body>
    </html>`;
  }