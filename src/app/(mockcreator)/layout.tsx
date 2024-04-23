
'use client'
import { useState } from 'react';
import Header from '@/components/Dashboard/Header';
import Sidebar from '@/components/Dashboard/Sidebar';
 
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSmallSidebar, setIsSmallSidebar] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    setIsSmallSidebar(!isSmallSidebar); 
  };

  return (
    <div className="flex h-screen bg-white flex-col"> 
    <Header toggleSidebar={toggleSidebar} />
    <div className="flex flex-1"> 
      <Sidebar isSmall={isSmallSidebar} />
      <main className="flex-grow p-4 overflow-y-auto mb-5">{children}</main>
    </div>
  </div>
  
  );
}