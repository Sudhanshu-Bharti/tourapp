'use client'
import { ChangeEvent, useState } from 'react';
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {createClient}  from "@/utils/supabase/client"; 

export default function Page() {
  const [file, setFile] = useState(null);

  // const handleFileChange = (e) => {
  //   setFile(e.target.files[0]);
  // };

  const handleUpload = async ( e : ChangeEvent<HTMLInputElement>) => {
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

  // function handleFileChange(e: ChangeEvent<HTMLInputElement>): void {
  //   throw new Error('Function not implemented.');
  // }

  return (
    <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto px-4 py-6">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Create your account</h1>
          <p className="text-gray-500 dark:text-gray-400">Enter your information to create an account</p>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" placeholder="John Doe" required />
          </div>
          {/* Add other form fields */}
          <div className="space-y-2">
            <Label htmlFor="file">Upload File</Label>
            <Input onChange={(e)=> handleUpload(e)} id="file" type="file" />
          </div>
        </div>
      </div>
      <div className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="m@example.com" required type="email" />
          </div>
          <Button  className="w-full" type="button">
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
}
