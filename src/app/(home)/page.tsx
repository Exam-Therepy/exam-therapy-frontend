import Category from '@/components/Categoires/Container'
import HeroSection from "@/components/Hero"
export default function Home(){
    return(
        <main className='bg-gradient-to-b from-sky-200 via-sky-200 to-white'>
            <HeroSection/>
            <Category/>
        </main>
    )
}