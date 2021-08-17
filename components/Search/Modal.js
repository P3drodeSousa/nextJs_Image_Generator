import { useState, forwardRef, useImperativeHandle, useCallback } from "react";
import {FaRegWindowClose} from 'react-icons/fa'
import { Container, Results } from "./styles";
import useSearch from "../../utils/useSearch";
import Loading from "./Loading";

function Modal(props, ref) {
  const [visible, setVisible] = useState(false);
  const [search, setSearch] = useState("");
  const [term, setTerm] = useState("");

  const { images, loading } = useSearch(term);

  const copy2CLipBoard = async src => {
    await navigator.clipboard.writeText(src);
  };

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const handleSubmit = e => {
    if (e.charCode === 13) {
      setTerm(search);
    }
    return;
  };

  const handleCloseModal = useCallback(() => {
    setVisible(false);
  }, []);

  useImperativeHandle(
    ref,
    () => {
      return { openModal };
    },
    []
  );

  const openModal = useCallback(() => {
    setVisible(true);
  }, []);

  return (
    <Container visible={visible}>
      <div className="searchContainer">
        <input
          type="text"
          name="search"
          value={search}
          onChange={handleChange}
          onKeyPress={handleSubmit}
          placeholder="Press Enter Key to search..."
        />
        <FaRegWindowClose size={50} color='silver' onClick={handleCloseModal} />
      </div>
      <div className="holder">
        {!images.length
          ? <div>
              {loading ? <Loading /> : <img src="imgs/painting.png" alt="" />}
            </div>
          : <Results>
              {images.map((src, i) => {
                return (
                  <div key={i} onClick={() => copy2CLipBoard(src)}>
                    <img src={src} />
                  </div>
                );
              })}
            </Results>}
      </div>
    </Container>
  );
}

export default forwardRef(Modal);
