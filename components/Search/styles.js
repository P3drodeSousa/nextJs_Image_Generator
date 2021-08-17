import styled from "styled-components";

export const SideButton = styled.div`
  position: fixed;
  top: 220px;
  left: 0;
  width: 120px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-bottom-right-radius: 50%;
  border-top-right-radius: 50%;
  background-image: linear-gradient(
    to right,
    #25aae1,
    #40e495,
    #30dd8a,
    #2bb673
  );
  box-shadow: 0 4px 15px 0 rgba(49, 196, 190, 0.75);
  transform: translateX(-20px);
  -o-transition: all .4s ease-in-out;
  -webkit-transition: all .4s ease-in-out;
  transition: all .4s ease-in-out;
  background-size: 300% 100%;

  &:hover {
    background-position: 100% 0;
    -o-transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;
    transform: scale(1.1) translateX(-10px);
    transition: 400ms;
  }
`;

export const Container = styled.div`
  position: fixed;  
  height: 100%;
  max-height: 500px;
  width: 300px;
  overflow-x: hidden;
  background: white;
  border: 1px solid #eaeaea;
  padding: 20px;
  transition: all .4s ease-in-out;
  left: ${props =>
    props.visible ? "0" : "-360px"};
  box-shadow: 0 1px 16px rgba(0, 0, 0, 0.1);
  border-color: #ddd;
  border-radius: 3px;

  .searchContainer {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .holder {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    img {
      width: 350px;
    }
  }

  input {
    flex: 1;
    border: 1px solid black;
    border-radius: 2px;
    padding: 5px;
    border: 1px solid #eaeaea;
    outline: none;
    padding: 10px;
    margin-bottom: 5px;
    font-size: 15px;
    color: black;
    font-weight: bold;
    letter-spacing: 1px;

    ::placeholder {
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: black;
      font-weight: bold;
      font-size: 15px;
      opacity: 1;
      letter-spacing: 1px; /* Firefox */
    }

    :-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: black;
      font-weight: bold;
      font-size: 15px;
      opacity: 1;
      letter-spacing: 1px;
    }

    ::-ms-input-placeholder {
      /* Microsoft Edge */
      color: black;
      font-weight: bold;
      font-size: 15px;
      opacity: 1;
      letter-spacing: 1px;
    }

    &:hover {
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
      border-color: #ddd;
    }
  }

  svg {
    max-width: 128px;
    max-height: 128px;
  }
  .magnify {
    fill: #2bb6cc;
    animation: search 1s infinite ease;
  }
  .doc {
    fill: #33c8ba;
    animation: flyby 1s infinite ease;
  }

  @keyframes search {
    0% {
      transform: translate(40px, 40px) scale(.6);
    }
    50% {
      transform: translate(20px, 20px) scale(.6);
    }
    100% {
      transform: translate(40px, 40px) scale(.6);
    }
  }

  @keyframes flyby {
    0% {
      transform: translate(-20px, 20px) scale(.2);
      opacity: 0;
    }
    50% {
      transform: translate(30px, 20px) scale(.5);
      opacity: 1;
    }
    100% {
      transform: translate(100px, 20px) scale(.2);
      opacity: 0;
    }
  }
`;



export const Results = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  max-height: 500px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 0px; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }
  /* Optional: show position indicator in red */
  ::-webkit-scrollbar-thumb {
    background: #ff0000;
  }

  > div {
    margin: 10px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
    cursor: pointer;
    transition: 400ms;

    img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
    }

    &:hover {
      transform: scale(1.1);
    }
  }
`;
