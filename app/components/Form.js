import InputField from './InputField';
import Editor from './Editor';
import styles from '../../styles/Form.module.css';

export default function Form() {
	return (
		<div>
			<h2 className={styles.title}>Input field</h2>
			<InputField />
			<h2 className={styles.title}>Editor</h2>
			<div className={styles.editorWrapper}>
				<Editor />
			</div>
		</div>
	);
}
