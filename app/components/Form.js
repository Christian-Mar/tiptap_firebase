"use client"

import InputField from './InputField';
import Tiptap from './Editor';
import styles from '../../styles/Form.module.css';
import { useState } from 'react';
import parser from "html-react-parser";
import { db, storage } from '../../firebase/config';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { useRouter } from 'next/navigation';

export default function Form() {
	const [title, setTitle] = useState('')
	const [desc, setDesc] = useState('');
	const router = useRouter();

	const handleSubmit = async e => {
		e.preventDefault();

		try {
			await addDoc(collection(db, 'formInput'), {
				title: title,
				description: desc,
				created: Timestamp.now(),
			});
			router.push('/');
		} catch (err) {
			alert(err);
		}
	};

	return (
		<div>
			<h2 className={styles.title}>Input field</h2>
			<InputField title={title} setTitle={setTitle} />
			<h2 className={styles.title}>Editor</h2>
			<div className={styles.editorWrapper}>
				<Tiptap setDesc={setDesc} />
				<div>{parser(desc)}</div>
			</div>
			<button
				className={styles.form__SubmitButton}
				onClick={handleSubmit}
				type='submit'
			>
				Confirm
			</button>
		</div>
	);
}

// json -> https://tiptap.dev/guide/output
