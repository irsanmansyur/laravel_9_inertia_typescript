import { convertFromHTML } from 'draft-convert';
import { ContentState, convertToRaw, EditorState } from 'draft-js';
import React, { useEffect, useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { stateFromHTML } from 'draft-js-import-html';
import draftToHtmlPuri from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import styled from 'styled-components';
import axios from 'axios';
import route from 'ziggy-js';

export default function EditorContainer({ textHtml, onChange }: { textHtml: string; onChange?(htmlValue: string): void }) {
  const [uploadedImages, setUploadedImages] = useState<any[]>([]);
  const [editorState, setEditorState] = useState(EditorState.createWithContent(stateFromHTML(textHtml)));
  async function uploadImageCallBack(file: File) {
    const imageObject = { file: file, localSrc: URL.createObjectURL(file) };
    setUploadedImages([...uploadedImages, imageObject]);
    const form = new FormData();
    form.append('image', file);
    let resp = await axios.post(route('upload.editor'), form);
    return { data: { link: resp.data } };
  }
  useEffect(() => {
    const htmlPuri = draftToHtmlPuri(convertToRaw(editorState.getCurrentContent()));
    if (onChange) onChange(htmlPuri);
    return () => {};
  }, [editorState]);
  return (
    <EditorStyle className="editor border bg-white">
      <Editor
        editorState={editorState}
        onEditorStateChange={(editor) => setEditorState(editor)}
        toolbar={{
          inline: { inDropdown: true },
          list: { inDropdown: true },
          textAlign: { inDropdown: true },
          link: { inDropdown: true },
          history: { inDropdown: true },
          image: {
            uploadCallback: uploadImageCallBack,
            alt: { present: true, mandatory: true },
          },
          inputAccept: 'image/*',
        }}
      />
    </EditorStyle>
  );
}

const EditorStyle = styled.div`
  .rdw-editor-main {
    padding: 0 10px;
  }
`;
