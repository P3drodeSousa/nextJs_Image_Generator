import Head from 'next/head'
import Form from '../components/Form'
import Preview from '../components/Preview'
import { Container, Wrapper } from './_styles';
import { useState, useEffect } from 'react';

export default function Home() {
  const [values, setValues] = useState({theme: 'light', fileType: 'png', fontSize: '100px', textType: 'plain', textInput: 'Hello World !'});

  const handleChange = (e) => {
      const {name, value} = e.target;
      setValues({...values, [name]: value});
      console.log(values);
      const postData = async (values) => {
        const data = await JSON.stringify(values)

        console.log(data);

        await fetch("/api/hello",
          {
              method: "POST",
              body: data
          })
      }
      postData(values);
     
  }


  return (
    <Container >
      <Head>
        <title>OG image generator</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600&display=swap" rel="stylesheet"></link>
      </Head>
    <h1>Open Graph Image as a Service</h1>
    <Wrapper>
      <Form handleChange={handleChange} />
      <Preview  data={values} />
    </Wrapper>
    
    </Container>
  )
}
