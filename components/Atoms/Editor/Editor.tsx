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
        toolbar: ['bold', 'italic', '|', 'bulletedList', '|', 'undo', 'redo'],
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
