import Image from 'next/image';
import { Inter } from 'next/font/google';
import Form from './components//Form';
import Comments from './components/Comments';
import styles from '../styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<main className={`${styles.main} ${inter.className}`}>
			<h1>Setup of Tiptap</h1>
			<div className={styles.content__container}>
				<div className={styles.content__functionality}>
					<div className={styles.content__functionality_children}>
						<Form />
					</div>
					<div className={styles.content__functionality_output}>
						Show the data
					</div>
				</div>
				<div className={styles.comments__container}>
					<h2>Comments</h2>
					<Comments/>
				</div>
			</div>
		</main>
	);
}
