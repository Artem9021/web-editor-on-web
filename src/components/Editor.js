import React, { Component } from 'react'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/css/css';
import 'codemirror/mode/javascript/javascript';
import {Controlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/addon/edit/closebrackets.js';


export default function Editor(props) {
    const {title, language, value, onChange} = props;
    
    function handleChange(editor, data, value){
        onChange(value);
    }
    
    return (
        <div className="editor">
            <div className="title">
                {title}                
            </div>
            <CodeMirror
              onBeforeChange={handleChange}
              value={value}
              className="editor"
              
              options={{
                  lineWrapping: true,
                  lint: true,
                  mode: language,
                  lineNumbers: true,
                  theme: "monokai",
                  autoCloseBrackets: true,
                  spellcheck: false,
                  
              }}
              />
        </div>
    )
}
