import UserHeader from '@/components/UserHeader';
import Footer from '@/components/Footer'


export default function HomeLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  return (
        <>
         <UserHeader/>
         {children}
         <Footer/>
        </>
  );
}
