import { Container } from "./styles";
import Search from "../Search";

function Form({ handleChange, values, setValues }) {
  const handleAddFields = () => {
    const images = [...values.images];
    images.push({ url: "", width: "150", heigth: "150" });
    setValues({ ...values, images });
  };

  const handleRemoveFields = i => {
    const images = [...values.images];
    images.splice(i, 1);
    setValues({ ...values, images });
  };

  const handleImageChange = (e, index, name) => {
    const images = values.images.map((item, i) => {
      if (index == i) {
        return { ...item, [name]: e.target.value };
      } else {
        return item;
      }
    });

    setValues({ ...values, images });
  };

  const pasteFromClipboard = async (e, index, name) => {
    const image = await navigator.clipboard.readText();
    const images = values.images.map((item, i) => {
      if (index == i) {
        return { ...item, [name]: image };
      } else {
        return item;
      }
    });

    setValues({ ...values, images });
  };

  return (
    <Container>
      <Search />
      <div>
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
              <select
                name="fontSize"
                defaultValue="150"
                onChange={handleChange}
              >
                <option value="25">25 px</option>
                <option value="50">50 px</option>
                <option value="75">75 px</option>
                <option value="100">100 px</option>
                <option value="125">125 px</option>
                <option value="150">150 px</option>
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

        {values.images.map((input, i) =>
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
                  onDoubleClick={e => pasteFromClipboard(e, i, "url")}
                />
                <div className="dimensions">
                  <div>
                    <select onChange={e => handleImageChange(e, i, "width")}>
                      <option value="auto">width</option>
                      <option value="50">50 px</option>
                      <option value="100">100 px</option>
                      <option value="150">150 px</option>
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

                <button onClick={() => handleRemoveFields(i)}>
                  Remove image {i + 1}
                </button>
              </div>
            </label>
          </div>
        )}

        <div>
          <label>
            <div className="fieldName">
              Image {values.images.length + 1}
            </div>
            <div className="fieldValue">
              <div>
                <div>
                  <button onClick={handleAddFields}>Add</button>
                </div>
              </div>
            </div>
          </label>
        </div>
      </div>
    </Container>
  );
}

export default Form;
