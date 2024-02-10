// pages/LoginPage.tsx
import React, { useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamic import for components that use useState
const DynamicLoginPageContent = dynamic(() => import('../components/LoginPageContent'), { ssr: false });

const LoginPage = () => {
  return (
    <div>
      <h1>Login Page</h1>
      <DynamicLoginPageContent />
    </div>
  );
};

export default LoginPage;
