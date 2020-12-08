import { Container } from "./styles";

function Form({ handleChange, inputList, setInputList, values }) {
  const handleAddFields = () => {
    setInputList(prevValues => [
      ...prevValues,
      { url: "", width: "", heigth: "" }
    ]);
  };

  const handleRemoveFields = i => {
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
        <label>
          <div className="fieldName">Theme</div>
          <div className="fieldValue">
            <select name="theme" onChange={handleChange}>
              <option value="black">Dark</option>
              <option value="white">Light</option>
            </select>
          </div>
        </label>
      </div>

      <div>
        <label>
          <div className="fieldName">File Type</div>
          <div className="fieldValue">
            <select name="fileType" onChange={handleChange}>
              <option value="png">PNG</option>
              <option value="jpg">JPG</option>
            </select>
          </div>
        </label>
      </div>

      <div>
        <label>
          <div className="fieldName">Font Size</div>
          <div className="fieldValue">
            <select name="fontSize" defaultValue="100" onChange={handleChange}>
              <option value="25">25 px</option>
              <option value="50">50 px</option>
              <option value="75">75 px</option>
              <option value="100">100 px</option>
              <option value="125">125 px</option>
              <option value="150">150 xp</option>
              <option value="175">175 px</option>
              <option value="200">200 px</option>
              <option value="225">225 px</option>
              <option value="250">250 px</option>
            </select>
          </div>
        </label>
      </div>

      <div>
        <label>
          <div className="fieldName">Text Type</div>
          <div className="fieldValue">
            <select name="textType" onChange={handleChange}>
              <option value="plainText">Plain Text</option>
              <option value="markdown">Markdown</option>
            </select>
          </div>
        </label>
      </div>

      <div>
        <label>
          <div className="fieldName">Text Input</div>
          <div className="fieldValue">
            <input
              type="text"
              name="textInput"
              value={values.textInput}
              onChange={handleChange}
            />
          </div>
        </label>
      </div>

      {inputList.map((input, i) =>
        <div key={i}>
          <label>
            <div className="fieldName">
              Image {i + 1}
            </div>
            <div className="fieldValue">
              <input
                type="text"
                onChange={e => handleImageChange(e, i, "url")}
                value={input.url}
              />
              <div className="dimensions">
                <div>
                  <select onChange={e => handleImageChange(e, i, "width")}>
                    <option value="auto">width</option>
                    <option value="50">50 px</option>
                    <option value="150">150 px</option>
                    <option value="100">100 px</option>
                    <option value="200">200 px</option>
                    <option value="250">250 px</option>
                    <option value="300">300 px</option>
                    <option value="350">350 px</option>
                  </select>
                </div>

                <div>
                  <select onChange={e => handleImageChange(e, i, "heigth")}>
                    <option value="auto">height</option>
                    <option value="50">50 px</option>
                    <option value="100">100 px</option>
                    <option value="150">150 px</option>
                    <option value="200">200 px</option>
                    <option value="250">250 px</option>
                    <option value="300">300 px</option>
                    <option value="350">350 px</option>
                  </select>
                </div>
              </div>

              {i > 0 &&
                <button onClick={() => handleRemoveFields(i)}>
                  Remove image {i + 1}
                </button>}
            </div>
          </label>

          <label>
            <div className="fieldName">
              Image {i + 2}
            </div>
            <div className="fieldValue">
              <div key={i}>
                <div>
                  {" "}<button onClick={handleAddFields}>Add</button>
                </div>
              </div>
            </div>
          </label>
        </div>
      )}
    </Container>
  );
}

export default Form;
