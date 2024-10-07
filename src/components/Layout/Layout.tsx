// components/Layout.tsx
import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-screen-lg mx-auto p-4">
      {children}
    </div>
  );
};

export default Layout;