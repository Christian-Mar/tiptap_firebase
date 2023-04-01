import styles from '../../styles/InputField.module.css';

export default function InputField({ title, setTitle }) {
	//const onChange = e => updateFormTitle(e.target.name, e.target.value);
	return (
		<div>
			<input
				className={styles.inputField}
				type='text'
				name='title'
				onChange={e => {setTitle(e.target.value)}}
				value={title}
				placeholder='Carpaccio'
			/>
		</div>
	);
}
