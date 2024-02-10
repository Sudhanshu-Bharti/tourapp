'use client'
import { ChangeEvent, useRef } from 'react';
import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

import { createClient } from '@/utils/supabase/client';

export default function page() {
  const editorRef = useRef(null);
  const handleGeneratePDF = async ( e : ChangeEvent<HTMLInputElement>) => {
    let file;
    if(e.target.files){
     file= e.target.files[0];
    }
    const supabase = createClient();
    const  {data , error} = await supabase.storage.from('guide-documents').upload('public' +file?.name,file as File)
   if(data){
     console.log(data)
   } else if (error){
     console.log(error.message);
   }
   };
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
      initialValue="Your content here"
      />
        {/* @ts-ignore */}
        <button onClick={handleGeneratePDF}>Send</button>
        </>
      );
    }
