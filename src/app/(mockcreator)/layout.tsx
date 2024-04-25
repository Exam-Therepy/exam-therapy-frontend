
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
    <div className="flex h-screen flex-col bg-[#EDF2F9]"> 
    <Header toggleSidebar={toggleSidebar} />
    <div className="flex flex-1 bg-[#EDF2F9]"> 
      <Sidebar isSmall={isSmallSidebar} />
      <main className="flex-grow p-4 overflow-y-auto h-screen mx-5 no-scrollbar">{children}</main>
    </div>
  </div>
  
  );
}