import axios from "axios";
import { useState, useEffect } from "react";

export default function useGenerateImage() {
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

  useEffect(
    () => {
      if (noOfRender < 1) {
        setNoOfRender(noOfRender + 1);
        return;
      }
      setLoading(true);

      let cancel;

      try {
        const getData = async () => {
          const res = await axios.post(
            "/api/hello",
            {
              values
            },
            { cancelToken: new axios.CancelToken(c => (cancel = c)) } //Pass the cancel token to the current request
          );

          setImage(res.data.url);
          setLoading(false);
        };

        getData();
      } catch (error) {
        console.log(error);
      }

      return () => cancel();
    },
    [values]
  );
  return { values, setValues, image, loading };
}
