import TestCard from '../components/TestCard'
import Image from 'next/image';

export default function Home() {
  return ( 
    <main>
      <section className="All xl:m-16 lg:m-12">
      <p className='my-3 mx-1 text-xl font-medium'>All Mock Tests</p>
      <div className='m-1 grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
        <TestCard/>
        <TestCard/>
        <TestCard/>
        <TestCard/>
        <TestCard/>
        <TestCard/>
        <TestCard/>
        <TestCard/>
        <TestCard/>
        <TestCard/>
      </div>
      </section>
    </main>
  );
}
