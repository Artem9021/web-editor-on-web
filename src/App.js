
import './App.css';
import React, { useEffect, useState } from 'react'
import Editor from "./components/Editor.js";
import Tabs from "./components/Tabs"; 


export default function App() {
  const [html, setHtml] = useState(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Webpage Title</title>
  </head>
  <body>
    
  </body>
</html>
  `)
  const [css, setCss] = useState('')
  const [js, setJs] = useState('')
  const [source, setSource] = useState('')
  useEffect(() => {
    const timeout = setTimeout(()=>{
      setSource(`
    <html>
    ${html}
    </html>
    <style>
    ${css}
    </style>
    <script>
    ${js}
    </script>
  `)
    }, 250)
    return () => clearTimeout(timeout)
  }, [html, css, js])
 
    return (
      /*
      <>
      <div className="editor-container section">
        <Editor language="xml" title="HTML" value={html} onChange={setHtml}/>
        <Editor language="css" title="CSS" value={css} onChange={setCss}/>
        <Editor language="javascript" title="JS" value={js} onChange={setJs}/>
      </div>
      <div className="section">
      <iframe
          srcDoc={source}
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
          />
      
      </div> 
      </>*/
      <>
      <Tabs> 
       <div label="HTML"> 
          <Editor language="xml" value={html} onChange={setHtml}/>
       </div> 
       <div label="CSS"> 
          <Editor language="css" value={css} onChange={setCss}/>
       </div> 
       <div label="JS"> 
           <Editor language="javascript" value={js} onChange={setJs}/>
       </div>
       <div label="PREVIEW">
          <iframe
          srcDoc={source}
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
          />
      
       </div> 
       <div label="ABOUT">
         <div className="about-section">
            <h1>WEOW - Web Editor On Web</h1>
            <p>WEOW is a simple open-source editor for HTML, CSS and JS. It runs within your web-browser, so you don't need to install anything. WEOW was developed using react.js</p>
            <h2>Features: </h2>
            <ul>
              <li>Syntax highlighting (powered by CodeMirror)</li>
              <li>Auto closing brackets, quotation marks, etc.</li>
              <li>Webpage preview</li>
              <li>Easy to use UI with tabs.</li>
            </ul>
            </div>
       </div>
     </Tabs> 
      </>

    )
  
}

