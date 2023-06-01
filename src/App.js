import { useState } from 'react';
import { marked } from 'marked';
import './App.css';

marked.setOptions({
  breaks: true
})

const renderer = new marked.Renderer();

function App() {
  const [ text, setText ] = useState("");

  return (
    <div className="app">
      <h1 className='p-4'>Markdown Previewer</h1>
      <textarea   
        id="editor" 
        rows="8" 
        className='textarea' 
        onChange={(event) => {
          setText(event.target.value);
        }}
        value={text}
      ></textarea>
      <h3 className='mt-3'>Output</h3>
      <Preview markdown={text}/>
    </div>
  );
}

function Preview({ markdown }){
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: marked(markdown, { renderer: renderer})
      }}
      id='preview'
    >
    </div>
  )
}

export default App;