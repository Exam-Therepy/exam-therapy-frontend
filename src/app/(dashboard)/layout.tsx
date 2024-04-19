
'use client'
import { useState } from 'react';
import Header from '@/components/Dashboard/Header';
import Sidebar from '@/components/Dashboard/Sidebar';
 
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSmallSidebar, setIsSmallSidebar] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    setIsSmallSidebar(!isSmallSidebar); // Toggle small sidebar state
  };

  return (
    <div className="flex h-screen bg-white">
      <Sidebar isSmall={isSmallSidebar} /> {/* Pass isSmall state */}
      <div className="flex flex-col flex-1">
        <Header toggleSidebar={toggleSidebar} />
        <main className="flex-grow p-4 overflow-y-auto mb-5">{children}</main>
      </div>
    </div>
  );
}