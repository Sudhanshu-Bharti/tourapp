'use client'
import { useRef } from 'react';
import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

export default function App() {
  const editorRef = useRef(null);
//   const log = () => {
//     if (editorRef.current) {
//       console.log(editorRef.current.getContent());
//     }
//   };
  return (
    <>
        <Editor
      apiKey='kn6799tr6w3x4ozpjuxhn979oa2ftfqekca4nylr0uyrqbnc'
      init={{
        plugins: 'ai tinycomments mentions anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed permanentpen footnotes advtemplate advtable advcode editimage tableofcontents mergetags powerpaste tinymcespellchecker autocorrect a11ychecker typography inlinecss',
        toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | tinycomments | removeformat',
        tinycomments_mode: 'embedded',
        tinycomments_author: 'Author name',
        mergetags_list: [
          { value: 'First.Name', title: 'First Name' },
          { value: 'Email', title: 'Email' },
        ],
        ai_request: (_request: any, respondWith: { string: (arg0: () => Promise<never>) => any; }) => respondWith.string(() => Promise.reject("See docs to implement AI Assistant")),
      }}
      initialValue="Welcome to TinyMCE!"
    />
    </>
  );
}