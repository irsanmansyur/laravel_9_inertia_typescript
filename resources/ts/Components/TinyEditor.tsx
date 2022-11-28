import React, { useState } from 'react';
import 'tinymce/tinymce';
import 'tinymce/icons/default';
import 'tinymce/themes/silver';
// import "tinymce/plugins/paste";
import 'tinymce/plugins/link';
import 'tinymce/plugins/image';
import 'tinymce/plugins/table';
import 'tinymce/skins/ui/oxide/skin.min.css';
import 'tinymce/skins/ui/oxide/content.min.css';
import 'tinymce/skins/content/default/content.min.css';
import { Editor } from '@tinymce/tinymce-react';

const TinyEditor = () => {
  const [contentEditor, setContentEditor] = useState();
  const handleEditorChange = (content: any, editor: any) => {
    setContentEditor(content);
  };

  return (
    <Editor
      initialValue="<p>This is the initial content of the editor</p>"
      init={{
        skin: false,
        content_css: false,
        height: 500,
        menubar: false,
        plugins: ['link image', 'table paste'],
        toolbar: 'undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help',
      }}
      value={contentEditor}
      onEditorChange={handleEditorChange}
    />
  );
};

export default TinyEditor;
