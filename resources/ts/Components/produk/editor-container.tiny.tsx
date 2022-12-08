import React, { useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { AppConfig } from '@ts/utils/constanta/config';
import { Produk } from '@ts/utils/fetch-data/produk-data';

export default function EditorContainerTiny({ textHtml, onChange, images }: { images: any[]; textHtml: string; onChange?(htmlValue: string): void }) {
  const [html, setHtml] = useState(textHtml);
  const editorRef = useRef(null);
  const onEditorChange = (valueHtml: string) => {
    if (onChange) onChange(valueHtml);
  };

  return (
    <>
      <Editor
        onInit={(_, editor) => (editorRef.current = editor)}
        initialValue={html}
        onEditorChange={onEditorChange}
        init={{
          height: 200,
          menubar: false,
          plugins: ['image', 'code'],
          toolbar: 'undo redo | formatselect | ' + 'bold italic backcolor | alignleft aligncenter ' + 'alignright alignjustify | bullist numlist outdent indent | ' + 'image | code',
          image_list: images,
          images_upload_handler: Produk.data.uploadImageHanlder,
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
          image_title: true,
          relative_urls: false,
          image_prepend_url: AppConfig.baseUrl,
        }}
      />
    </>
  );
}
