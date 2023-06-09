'use client';

//import { Color } from '@tiptap/extension-color';
import ListItem from '@tiptap/extension-list-item';
//import TextStyle from '@tiptap/extension-text-style';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import '../../styles/Editor.css';
import {
	FaBold,
	FaItalic,
	FaStrikethrough,
	FaHeading,
	FaListOl,
	FaListUl,
	FaQuoteLeft,
	FaRedo,
	FaUndo,
	FaUnderline,
} from 'react-icons/fa';

const MenuBar = ({ editor, desc }) => {
	if (!editor) {
		return null;
	}

	return (
		<div className='menu-bar'>
			<div>
				<button
					onClick={() => editor.chain().focus().toggleBold().run()}
					disabled={!editor.can().chain().focus().toggleBold().run()}
					className={editor.isActive('bold') ? 'is-active' : ''}
				>
					<FaBold />
				</button>
				<button
					onClick={() => editor.chain().focus().toggleItalic().run()}
					disabled={!editor.can().chain().focus().toggleItalic().run()}
					className={editor.isActive('italic') ? 'is-active' : ''}
				>
					<FaItalic />
				</button>
				<button
					onClick={() => editor.chain().focus().toggleUnderline().run()}
					disabled={!editor.can().chain().focus().toggleUnderline().run()}
					className={editor.isActive('underline') ? 'is-active' : ''}
				>
					<FaUnderline />
				</button>
				<button
					onClick={() => editor.chain().focus().toggleStrike().run()}
					disabled={!editor.can().chain().focus().toggleStrike().run()}
					className={editor.isActive('strike') ? 'is-active' : ''}
				>
					<FaStrikethrough />
				</button>
				<button
					onClick={() =>
						editor.chain().focus().toggleHeading({ level: 1 }).run()
					}
					className={
						editor.isActive('heading', { level: 1 }) ? 'is-active' : ''
					}
				>
					<FaHeading />
				</button>
				<button
					onClick={() => editor.chain().focus().toggleBulletList().run()}
					className={editor.isActive('bulletList') ? 'is-active' : ''}
				>
					<FaListUl />
				</button>
				<button
					onClick={() => editor.chain().focus().toggleOrderedList().run()}
					className={editor.isActive('orderedList') ? 'is-active' : ''}
				>
					<FaListOl />
				</button>
				<button
					onClick={() => editor.chain().focus().toggleBlockquote().run()}
					className={editor.isActive('blockquote') ? 'is-active' : ''}
				>
					<FaQuoteLeft />
				</button>
			</div>
			<div>
				<button
					onClick={() => editor.chain().focus().undo().run()}
					disabled={!editor.can().chain().focus().undo().run()}
				>
					<FaUndo />
				</button>
				<button
					onClick={() => editor.chain().focus().redo().run()}
					disabled={!editor.can().chain().focus().redo().run()}
				>
					<FaRedo />
				</button>
			</div>
		</div>
	);
};

const Tiptap = ({setDesc, desc}) => {
	const editor = useEditor({
		extensions: [StarterKit, Underline],
    content: ``,
    onUpdate: ({editor}) => {
      const html = editor.getHTML();
      setDesc(html);
      
    }
	});

	return (
		<div className='text__editor'>
			<MenuBar editor={editor} />
			<EditorContent editor={editor} desc={desc}/>
		</div>
	);
};

export default Tiptap;

// json -> https://tiptap.dev/guide/output