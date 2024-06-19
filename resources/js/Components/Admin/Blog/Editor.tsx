import { useRef, useState, useEffect, FunctionComponent } from 'react';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import styles from './Editor.module.scss';

export const Editor: FunctionComponent = () => {
    const [editor, setEditor] = useState<monaco.editor.IStandaloneCodeEditor | null>(null);
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

