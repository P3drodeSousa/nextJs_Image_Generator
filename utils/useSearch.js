import axios from "axios";
import { useState, useEffect } from "react";

export default function useSearch(query) {
  const [images, setImages] = useState("");
  const [loading, setLoading] = useState("");
  const [noOfRender, setNoOfRender] = useState(0);

  useEffect(
    () => {
      if (noOfRender < 1) {
        setNoOfRender(noOfRender + 1);
        return;
      }

      if (!query.length) return;

      setLoading(true);
      setImages([]);
      let cancel;

      try {
        const getData = async () => {
          const { data } = await axios.get(
            `api/${query}`,
            { cancelToken: new axios.CancelToken(c => (cancel = c)) } //Pass the cancel token to the current request
          );
          setImages(data.imgs);
          setLoading(false);
        };

        getData();
      } catch (error) {
        console.log(error);
      }

      return () => cancel();
    },
    [query]
  );

  return { images, loading };
}
