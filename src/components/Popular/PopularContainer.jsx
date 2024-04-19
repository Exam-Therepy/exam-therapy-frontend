import TestCard from './TestCard'
export default function PopularContainer(){
    return (
        <div className="overflow-x-auto">
        <div className="flex flex-nowrap">
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
      </div>
    )
}