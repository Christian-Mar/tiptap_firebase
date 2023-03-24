"use client"

import {$getRoot, $getSelection} from 'lexical';
import {useEffect} from 'react';

import {LexicalComposer} from '@lexical/react/LexicalComposer';
import {PlainTextPlugin} from '@lexical/react/LexicalPlainTextPlugin';
import {ContentEditable} from '@lexical/react/LexicalContentEditable';
import {HistoryPlugin} from '@lexical/react/LexicalHistoryPlugin';
//import {OnChangePlugin} from '@lexical/react/LexicalOnChangePlugin';
//import {useLexicalComposerContext} from '@lexical/react/LexicalComposerContext';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import styles from '../../styles/Editor.module.css';

const theme = {
	// Theme styling goes here
	
	}



function onError(error) {
  console.error(error);
}

export default function Editor() {
  const initialConfig = {
    namespace: 'MyEditor', 
    theme,
    onError,
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <PlainTextPlugin
        contentEditable={<ContentEditable className={styles.contentEditable}/>}
        placeholder={<div>Enter some text...</div>}
        ErrorBoundary={LexicalErrorBoundary}
        
      />
      
      <HistoryPlugin />
     
    </LexicalComposer>
  );
}
