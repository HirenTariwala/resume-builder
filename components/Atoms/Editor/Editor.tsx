import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import React, { useState } from 'react';

interface IEditorProps {
  value: string;
  handleChange: (value: string) => void;
}

const Editor = (editorProps: IEditorProps) => {
  const { value, handleChange } = editorProps;
  const [data, setData] = useState(value ?? '');

  return (
    <CKEditor
      editor={ClassicEditor}
      config={{
        toolbar: [
          'heading',
          '|',
          'bold',
          'italic',
          'link',
          'bulletedList',
          '|',
          'insertTable',
          'undo',
          'redo',
        ],
        heading: {
          options: [
            {
              model: 'paragraph',
              title: 'Paragraph',
              class: 'ck-heading_paragraph',
            },
            {
              model: 'heading1',
              view: 'h1',
              title: 'Heading 1',
              class: 'ck-heading_heading1',
            },
            {
              model: 'heading2',
              view: 'h2',
              title: 'Heading 2',
              class: 'ck-heading_heading2',
            },
          ],
        },
        table: {
          contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells'],
        },
      }}
      data={data}
      onChange={(_, editor) => {
        const str = editor.getData();

        handleChange(str);
        setData(str);
      }}
    />
  );
};

export default Editor;
