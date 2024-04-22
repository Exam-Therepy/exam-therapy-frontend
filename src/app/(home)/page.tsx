import Category from '@/components/Categoires/Container'
import AllMockTests from '@/components/AllMocks/Container'
import HeroSection from "@/components/Hero"
import StatsHero from '@/components/StatsHero'
export default function Home(){
    return(
        <main className='bg-[#FFFFFF]'>
            <HeroSection/>
            <Category/>
            <AllMockTests/>
            <StatsHero/>
        </main>
    )
}