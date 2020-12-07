import Head from 'next/head'
import Form from '../components/Form'
import Preview from '../components/Preview'
import { Container, Wrapper } from './_styles';
import { useState, useEffect } from 'react';

export default function Home() {
  const [values, setValues] = useState({
    theme: "black",
    fileType: "png",
    fontSize: "100",
    textType: "plain",
    textInput: "Hello World !",
  });

  const [inputList, setInputList] = useState([
    { url: "", width: "", heigth: "" },
  ]);

  const [image, setImage] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const postData = async (info) => {
     setLoading(true)

    let newData = {infos: info, images: inputList}

      const data = JSON.stringify(newData)
      const res = await fetch("/api/hello",
          {
            method: "POST", 
            body: data
          });


      const url = await res.json();
      setImage(url)
      setLoading(false)
      }
      postData(values);
  }, [values, inputList])


  const handleChange = (e) => {
    const {name, value} = e.target;
      setValues({...values, [name]: value});
  }

  return (
    <Container>
      <Head>
        <title>OG image generator</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <h1>Open Graph Image as a Service</h1>
      <Wrapper>
        <Form
          handleChange={handleChange}
          inputList={inputList}
          setInputList={setInputList}
        />
        <Preview url={image.url} loading={loading} />
      </Wrapper>
    </Container>
  );
}
