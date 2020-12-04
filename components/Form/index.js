import { Container } from './styles';

function Form({handleChange}) {
  return <Container>
    <div>
      <label>Theme</label>

      <select name="theme" onChange={handleChange}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
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
          <option value="25px">25px</option>
          <option value="50px">50px</option>
          <option value="75px">75px</option>
          <option value="100px">100px</option>
          <option value="125px">125px</option>
          <option value="150px">150xp</option>
          <option value="175px">175px</option>
          <option value="200px">200px</option>
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
      <div>
            <label>Image 1</label>

            <input type="text" />
      </div>

      <div>
            <label>Image 2</label>

            <input type="text" />
      </div>




  </Container>;
}

export default Form;