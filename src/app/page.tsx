import TestCard from '../components/TestCard'
import Image from 'next/image';
import CategoryCard from '../components/CategoryCard'

export default function Home() {
  return ( 
    <main>
      <section className="xl:m-16 lg:m-12">
        <p className='my-2 mx-4 text-xl font-medium'>Popular Mock Tests</p>
        <div className="overflow-x-auto">
          <div className="flex flex-nowrap">
             <TestCard/>
             <TestCard/>
             <TestCard/>
             <TestCard/>
             <TestCard/>
          </div>
        </div>
      </section>

     <section className="xl:m-16 lg:m-12">
      <p className='my-3 mx-1 text-xl font-medium'>Categories</p>
      <div className='m-1 grid gap-3 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
        <CategoryCard/>
        <CategoryCard/>
        <CategoryCard/>
        <CategoryCard/>
        <CategoryCard/>
        <CategoryCard/>
        <CategoryCard/>
        <CategoryCard/>
        <CategoryCard/>
        <CategoryCard/>
      </div>
      </section>
    </main>
  );
}
