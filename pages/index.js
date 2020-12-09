import Head from "next/head";
import Form from "../components/Form";
import Preview from "../components/Preview";
import { Container, Wrapper } from "./_styles";
import { useState, useEffect } from "react";

// TODO MERGE STATES  OF INPUTLINKS WITH DATA

export default function Home() {
  const [values, setValues] = useState({
    theme: "black",
    fileType: "png",
    fontSize: "150",
    textType: "plain",
    textInput: "Hello World !",
    images: []
  });

  const [noOfRender, setNoOfRender] = useState(0);
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  //TODO IMPROVE PERFORMANCE

  useEffect(
    () => {
      if (noOfRender < 1) {
        setNoOfRender(noOfRender + 1);
        return;
      }

      const postData = async info => {
        setLoading(true);
        const data = JSON.stringify(info);
        const res = await fetch("/api/hello", {
          method: "POST",
          body: data
        });
        const url = await res.json();
        setImage(url);
        setLoading(false);
      };

      const timer = setTimeout(() => {
        postData(values);
      }, 1000);
      return () => clearTimeout(timer);
    },
    [values]
  );

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
      <Wrapper>
        <Form
          handleChange={handleChange}
          values={values}
          setValues={setValues}
        />
        <Preview url={image.url} loading={loading} />
      </Wrapper>
    </Container>
  );
}
