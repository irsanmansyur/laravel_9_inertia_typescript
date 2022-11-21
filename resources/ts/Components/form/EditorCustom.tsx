import React, { useEffect, useRef, useState } from "react";
import { EditorState, ContentState, convertFromHTML, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtmlPuri from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import axios from "axios";
import { Switch } from "@material-tailwind/react";
import InputError from "../InputError";
// examples in https://github.com/jpuri/react-draft-wysiwyg/tree/master/stories
async function uploadImageCallBack(file: File) {
  const form = new FormData();
  form.append("image", file);
  let response = await axios.post("http://api.imgur.com/3/image", form, {
    headers: {
      "content-type": "multipart/form-data", // do not forget this
      Authorization: `Client-ID 09`,
    },
  });
  return response.data;
}
type Props = {
  label?: string;
  className?: string;
  htmlText: string;
  error?: string | null;
  onChange: any;
};
const EditorContainer = ({ error, htmlText = "", onChange, ...props }: Props) => {
  let editorRef = useRef<Editor>(null);
  const [editorState, setEditorState] = useState(EditorState.createWithContent(ContentState.createFromBlockArray(convertFromHTML(htmlText))));
  //   const [editorState, setEditorState] = useState(htmlText);
  const [editMode, setEditMode] = useState(true);
  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const onEditorStateChange = (editorState: EditorState) => {
    setEditorState(editorState);
    const htmlPuri = draftToHtmlPuri(convertToRaw(editorState.getCurrentContent()));
    // let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
    onChange(htmlPuri);
  };
  return (
    <div className="editor mt-3">
      <div className="flex justify-between">
        <div>{props.label}</div>
        <div>{/* <Switch onChange={(e) => setEditMode(!editMode)} defaultChecked ripple={true} label="Edit Mode" /> */}</div>
      </div>
      <Editor
        editorClassName={"px-2 mb-2 " + props.className}
        editorState={editorState}
        onEditorStateChange={onEditorStateChange}
        placeholder="type here"
        ref={editorRef}
        readOnly={!editMode}
        // toolbarHidden={true}
        toolbar={{
          options: ["inline", "blockType", "fontSize", "fontFamily", "list", "textAlign", "colorPicker", "embedded", "remove", "history"],
          image: {
            uploadCallback: uploadImageCallBack,
            editMode: true,
            // alt: { present: true, mandatory: true },
          },
          // inline: { inDropdown: true },
          // list: { inDropdown: true },
          // textAlign: { inDropdown: true },
          // link: { inDropdown: true },
          // history: { inDropdown: true },
        }}
      />
      <InputError message={error} className="-mt-1" />
    </div>
  );
};

export default EditorContainer;
