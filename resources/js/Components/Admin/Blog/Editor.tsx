import {useEffect, useState, useReducer, useCallback} from 'react';
import { githubDark } from "./codemirror-github";
import {basicSetup, EditorView} from "codemirror";
import {EditorState} from "@codemirror/state"
import {markdown} from "@codemirror/lang-markdown";
import {yaml} from "@codemirror/lang-yaml";

interface UseCodeMirrorOptions {
    value?: string;
    onChange?: (code: string) => unknown;
    container?: HTMLDivElement | null;
}

type ThemeModule = {
    theme: "light" | "dark";
    addChangeListener: (listener: () => unknown) => unknown;
    removeChangeListener: (listener: () => unknown) => unknown;
};

export function useCodeMirror({value: initialValueParam, onChange, container}: UseCodeMirrorOptions): {
    value: string;
    setValue: (value: string) => void;
} {
    const [value, setValue] = useState("");
    const [view, setView] = useState<EditorView | undefined>(undefined);

    const [update, forceUpdate] = useReducer((x) => x + 1, 0);

    useEffect(() => {
        if (initialValueParam) {
            setValue(initialValueParam);
            forceUpdate();
        }
    }, [initialValueParam]);

    useEffect(() => {
        if (!container) return undefined;
        if (view) view.destroy();

        const newView = new EditorView({
            state: EditorState.create({
                doc: value,
                extensions: [
                    basicSetup,
                    markdown(),
                    yaml(),
                    EditorView.updateListener.of((update) => {
                        if (update.docChanged) {
                            setValue(update.state.doc.toString());
                            onChange?.(update.state.doc.toString());
                        }
                    }),
                    githubDark
                ]
            }),
            parent: container,
        });

        setView(newView);

        return () => {
            newView.destroy();
            setView(undefined);
        };

    }, [container]);

    const customSetValue = useCallback(
        (value: string) => {
            setValue(value);
            forceUpdate();
        },
        [view],
    )

    return {value, setValue: customSetValue}
}
