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
				<li>
					<p>
						Dynamic import:{' '}
						<a href='https://blog.logrocket.com/dynamic-imports-code-splitting-next-js/'>
							article on LogRocket
						</a>
					</p>
				</li>
				<li>
					<p>Can I just import the component with dynamic import and use 'ssr: false' there, instead of using it in the component itself? Or, can I just use "use client"?</p>
				</li>
			</ul>
		</div>
	);
}
