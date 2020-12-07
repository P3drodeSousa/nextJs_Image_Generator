import { useState } from 'react';

// import { Container } from './styles';

function ImageForm({ handleImageChange }) {
  const [inputList, setInputList] = useState([{ image: "" }]);

  const handleAddFields = () => {
    setInputList((prevValues) => [...prevValues, { image: "" }]);
  };

  const handleRemoveFields = (i) => {
    if (inputList.length === 1) return;
    const values = [...inputList];
    values.splice(i, 1);
    setInputList(values);
  };

  //   const handleImageChange = (e, index) => {
  //     const values = [...inputList];
  //     values[index].image = e.target.value;
  //     setInputList(values);
  //   };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {inputList.map((input, i) => (
        <div key={i}>
          <label>Image {i + 1}</label>
          <input
            type="text"
            onChange={(e) => handleImageChange(e, i)}
            value={input.image}
          />
          <div style={{ display: "flex" }}>
            <div>
              <select name="imageWidth">
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
              <select name="imageHeight">
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
  );
}

export default ImageForm;