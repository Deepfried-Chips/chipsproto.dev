import React, {useRef, useEffect} from 'react';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import styles from './Editor.module.scss';

interface EditorProps {
    editor: monaco.editor.IStandaloneCodeEditor | null,
    setEditor: React.Dispatch<React.SetStateAction<monaco.editor.IStandaloneCodeEditor | null>>
}

export const Editor: React.FC<EditorProps> = ({editor, setEditor}) => {
    const monacoEl = useRef(null);

    useEffect(() => {
        if (monacoEl) {
            setEditor((editor) => {
                if (editor) return editor;

                return monaco.editor.create(monacoEl.current!, {
                    language: 'markdown',
                    theme: 'vs-dark',
                });
            });
        }

        return () => editor?.dispose();
    }, [monacoEl.current]);

    return <div className={styles.Editor} ref={monacoEl}></div>;
};

