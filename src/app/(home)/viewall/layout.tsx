import Sidenav from '@/components/viewall/Sidenav'
export default function ViewAllLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  return (
    <>
    <div className="flex h-screen bg-white flex-col"> 
    <div className="flex flex-1"> 
      <Sidenav/>
      <main className="h-screen flex-grow p-4 mb-5 grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 lg:overflow-y-auto">{children}</main>
    </div>
  </div>
 </>
  );
}
