'use client'
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { SetStateAction, useState } from "react";
import { supabase } from "@/lib/supabase"; // Fixed import statement
export default function Component() {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event: any): void => {
        if (event && event.target && event.target.files) {
            setSelectedFile(event.target.files[0]);
        }
    };

    const handleUpload = async () => {
        if (!selectedFile) {
            console.error('No file selected');
            return;
        }
        try {
            const { data, error } = await supabase.storage
                .from('avatars')
                .upload('public/avatar1.png', selectedFile, {
                    cacheControl: '3600',
                    upsert: false
                });

            if (error) {
                console.error('Error uploading file:', error.message);
            } else {
                console.log('File uploaded successfully:', data);
                // Handle success, e.g., show a success message to the user
            }
        } catch (error) {
           
        }
    };

    return (
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto px-4 py-6">
            <div className="space-y-6">
                <div className="space-y-2">
                    <h1 className="text-3xl font-bold">Register your account</h1>
                    <p className="text-gray-500 dark:text-gray-400">Enter your information</p>
                </div>
                <div className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" placeholder="John Doe" required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="age">Age</Label>
                        <Input id="age" placeholder="25" required />
                    </div>
                    <div className="space-y-2">
                        <Label>Gender</Label>
                        <div className="space-x-2">
                            <Label className="inline-block" htmlFor="gender-male">
                                <Input id="gender-male" name="gender" type="radio" value="male" />
                                <span className="ml-1">Male</span>
                            </Label>
                            <Label className="inline-block" htmlFor="gender-female">
                                <Input id="gender-female" name="gender" type="radio" value="female" />
                                <span className="ml-1">Female</span>
                            </Label>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" placeholder="+11234567890" required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="aadhar">Aadhar ID</Label>
                        <Input id="aadhar" placeholder="1234 5678 9012" required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="bank">Bank Account</Label>
                        <Input id="bank" placeholder="1234567890" required />
                    </div>
                </div>
            </div>
            <div className="space-y-6">
                <div className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" placeholder="m@example.com" required type="email" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" required type="password" />
                    </div>
                </div>
                <Button onClick={handleUpload} className="w-full" type="submit">
                    Sign Up
                </Button>
            </div>
        </div>
    );
}
