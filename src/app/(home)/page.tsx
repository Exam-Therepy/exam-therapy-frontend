import Popular from '@/components/Popular/PopularContainer'
import Category from '@/components/Categoires/Container'
import Carousel from "@/components/Carousel"
export default function Home(){
    return(
        <main className='xl:m-10 lg:m-10'>
            <Carousel/>
            <Popular/>
            <Category/>
        </main>
    )
}