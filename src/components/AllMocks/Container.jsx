import Card from './Card'
export default function AllMocksContainer(){
    return (
          <div className='container-fluid flex flex-col lg:m-20 p-5 shadow-inner'>
             <div><h1 className='font-bold text-lg mb-4'>All Mock Tests</h1></div>
             <div className='grid gap-3 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4'>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
             </div>
          </div>
    )
}