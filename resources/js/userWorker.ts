import * as monaco from 'monaco-editor';
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';
import {loader} from "@monaco-editor/react";

// @ts-ignore
self.MonacoEnvironment = {
    getWorker(_: any) {
        return new editorWorker();
    }
};

loader.config({monaco});

loader.init();
