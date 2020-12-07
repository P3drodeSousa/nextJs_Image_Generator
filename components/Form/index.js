import { Container } from "./styles";
import { useState } from "react";

function Form({ handleChange, inputList, setInputList}) {

  // TODO MERGE STATES  OF INPUTLINKS WITH DATA

  const handleAddFields = () => {
    setInputList((prevValues) => [
      ...prevValues,
      { url: "", width: "", heigth: "" },
    ]);
  };

  const handleRemoveFields = (i) => {
    if (inputList.length === 1) return;
    const values = [...inputList];
    values.splice(i, 1);
    setInputList(values);
  };

  const handleImageChange = (e, index, name) => {
    let newArr = inputList.map((item, i) => {
      if (index == i) {
        return { ...item, [name]: e.target.value };
      } else {
        return item;
      }
    });
     setInputList(newArr);
  };

  return (
    <Container>
      <div>
        <label>Theme</label>

        <select name="theme" onChange={handleChange}>
          <option value="black">Dark</option>
          <option value="white">Light</option>
        </select>
      </div>

      <div>
        <label>File Type</label>

        <select name="fileType" onChange={handleChange}>
          <option value="png">PNG</option>
          <option value="jpg">JPG</option>
        </select>
      </div>

      <div>
        <label>Font Size</label>

        <select name="fontSize" onChange={handleChange}>
          <option value="25">25px</option>
          <option value="50">50px</option>
          <option value="75">75px</option>
          <option value="100">100px</option>
          <option value="125">125px</option>
          <option value="150">150xp</option>
          <option value="175">175px</option>
          <option value="200">200px</option>
        </select>
      </div>

      <div>
        <label>Text Type</label>

        <select name="textType" onChange={handleChange}>
          <option value="markdown">Markdown</option>
          <option value="plainText">Plain Text</option>
        </select>
      </div>

      <div>
        <label>Text Input</label>
        <input type="text" name="textInput" onChange={handleChange} />
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        {inputList.map((input, i) => (
          <div key={i}>
            <label>Image {i + 1}</label>
            <input
              type="text"
              onChange={(e) => handleImageChange(e, i, 'url')}
              value={input.url}
            />
            <div style={{ display: "flex" }}>
              <div>
                <select  onChange={(e) => handleImageChange(e, i, 'width')}>
                  <option value="auto">width</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                  <option value="150">150</option>
                  <option value="200">200</option>
                  <option value="250">250</option>
                  <option value="300">300</option>
                  <option value="350">350</option>
                </select>
              </div>

              <div>
                <select onChange={(e) => handleImageChange(e, i, 'heigth')}>
                  <option value="auto">height</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                  <option value="150">150</option>
                  <option value="200">200</option>
                  <option value="250">250</option>
                  <option value="300">300</option>
                  <option value="350">350</option>
                </select>
              </div>
            </div>

            {i > 0 && (
              <button onClick={() => handleRemoveFields(i)}>
                Remove image {i + 1}
              </button>
            )}
          </div>
        ))}

        <label>Image {inputList.length + 1}</label>
        <button onClick={handleAddFields}>Add</button>
      </div>
    </Container>
  );
}

export default Form;
