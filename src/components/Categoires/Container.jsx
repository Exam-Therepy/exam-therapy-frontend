import Card from './Card'
export default function CategoryContainer() {
    return (
        <div className='p-4 container-fluid flex flex-col lg:mx-20 lg:p-10 shadow-inner'>
            <div className='flex justify-between'>
                <h1 className='font-bold text-lg mb-4'>Select Your Exam Category</h1>
                <p className='text-md'>View All</p>
            </div>
            <div className='grid gap-3 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}