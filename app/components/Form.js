"use client"

import InputField from './InputField';
import Tiptap from './Editor';
import styles from '../../styles/Form.module.css';
import { useState } from 'react';
import parser from "html-react-parser";

export default function Form() {
	const [desc, setDesc] = useState('')
	return (
		<div>
			<h2 className={styles.title}>Input field</h2>
			<InputField />
			<h2 className={styles.title}>Editor</h2>
			<div className={styles.editorWrapper}>
				<Tiptap setDesc={setDesc}/>
				<div>{parser(desc)}</div>
			</div>
		</div>
	);
}
