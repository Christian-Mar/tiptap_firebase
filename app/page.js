"use client"

import Image from 'next/image';
import { Inter } from 'next/font/google';
import Form from './components//Form';
import Comments from './components/Comments';
import styles from '../styles/Home.module.css';
import { db } from '../firebase/config';
import { collection, getDocs } from 'firebase/firestore';
import { useState, useEffect } from 'react';
//import parser from 'html-react-parser';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	// after return <div>{!session ? (<Auth />) : (<main>...</main>)}</div>
	// https://github.com/Christian-Mar/skill-app
	const collectionRef = collection(db, 'formInput');

	const [list, setList] = useState([])

	useEffect(() => {
		const getList = async () => {
			await getDocs(collectionRef)
				.then(todo => {
					let todoData = todo.docs.map(doc => ({ ...doc.data(), id: doc.id }));
					setList(todoData);
				})
				.catch(err => {
					console.log(err);
				});
		};
		getList();
	}, [list]);

	return (
		<div className={inter.className}>
			<main className={styles.main}>
				<h1>Setup of Tiptap</h1>
				<div className={styles.content__container}>
					<div className={styles.content__functionality}>
						<div className={styles.content__functionality_children}>
							<Form />
						</div>
						<div className={styles.content__functionality_output}>
							Show the data
						</div>
						{list.map(({ title, desc, id }) => (
							<div key={id}>
								{title} {desc}
							</div>
						))}
					</div>
					<div className={styles.comments__container}>
						<h2>Comments</h2>
						<Comments />
					</div>
				</div>
			</main>
		</div>
	);
}
