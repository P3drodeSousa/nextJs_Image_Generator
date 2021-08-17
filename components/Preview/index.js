import { useState } from "react";
import Notification from "./Notification";
import { Container } from "./styles";

function Preview({ url, loading }) {
  const [show, setShow] = useState(false);

  const imagePath = !url ? `imgs/base.png` : `http://localhost:3000/${url}`;

  const copy2CLipBoard = async () => {
    setShow(true);
    await navigator.clipboard.writeText(imagePath);
    setTimeout(() => {
      setShow(false);
    }, 4000);
  };

  return (
    <Container>
      <div
        className="image-wrapper"
        style={{
          filter: loading ? "blur(10px)" : "none",
          transition: loading ? "none" : "filter 0.2s ease-out"
        }}
      >
        <img
          key={Date.now()}
          src={imagePath}
          onClick={copy2CLipBoard}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover"
          }}
        />
      </div>
      <Notification show={show} />
    </Container>
  );
}

export default Preview;
