import Head from "next/head";
import Form from "../components/Form";
import Preview from "../components/Preview";
import { Container, Wrapper } from "../styles/styles";
import useGenerateImage from "../utils/useGenerateImage";
import Search from "../components/Search";

export default function Home() {
  const { values, setValues, image, loading, error } = useGenerateImage();

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <Container>
      <Head>
        <title>OG image generator</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <h1>Open Graph Image as a Service</h1>
      <h1>error</h1>

      <Wrapper>
        <Form
          handleChange={handleChange}
          values={values}
          setValues={setValues}
        />
        <Preview url={image} loading={loading} />
      </Wrapper>
    </Container>
  );
}
