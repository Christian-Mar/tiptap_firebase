import styles from '../../styles/Home.module.css';

export default function Comments() {
	return (
		<div>
			<ul className={styles.comments__content}>
				<li>
					<p>Setup: page - Form (child) - Input & Editor (children of Form)</p>
				</li>
				<li>
					<p>Firebase: firebase/config.js + .env.local</p>
				</li>
			</ul>
		</div>
	);
}
