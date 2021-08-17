import { useCallback, useRef } from "react";
import Modal from "./Modal";
import { FaSearch } from "react-icons/fa";
import { SideButton } from "./styles";

const Search = () => {
  const modalRef = useRef(null);

  const handleOpenModal = useCallback(() => {
    modalRef.current.openModal();
  }, []);

  return (
    <div>
      <SideButton onClick={handleOpenModal}>
        <FaSearch size={45} color="white" />
      </SideButton>

      <Modal ref={modalRef} />
    </div>
  );
};

export default Search;
