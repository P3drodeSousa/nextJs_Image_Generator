import { useRouter } from "next/router";
import { Container } from "./styles";

function Preview({ url, loading }) {
  const router = useRouter();
  const imagePath = !url ? `${router.basePath}/imgs/base.png` : `${url}`;

  return (
    <Container>
      <div
        className="image-wrapper"
        style={{
          filter: loading ? "blur(10px)" : "none",
          transition: loading ? "none" : "filter 0.2s ease-out",
        }}
      >
        <a href={imagePath} download>
          <img
            key={Date.now()}
            src={imagePath}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </a>
      </div>
    </Container>
  );
}

export default Preview;
