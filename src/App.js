import React, { useState } from 'react';
import './App.scss';
import {marked} from 'marked';

function App() {
  const [markdown, setMarkdown] = useState("");

  return (
    <div className="App">
      <header className="app-header">
        <h1>Markdown Previewer</h1>
      </header>
      <body className="app-body">
        <div className="container editor-container">
          <div className="header editor-header">Editor</div>
          <textarea placeholder="Input markdown here..." autofocus id="editor" onChange={event => setMarkdown(event.target.value)}></textarea>
        </div>
        <div className="container preview-container">
          <div className="header preview-header">Preview</div>
          <div id="preview" dangerouslySetInnerHTML={{__html:marked(markdown)}}></div>
        </div>
        </body>  
    </div>
  );
}

export default App;
