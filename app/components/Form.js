import InputField from './InputField';
import Editor from './Editor';
import styles from '../../styles/Form.module.css';

export default function Form() {
	return (
		<div>
			<InputField />
			<div className={styles.editorWrapper}>
				<Editor />
			</div>
		</div>
	);
}
