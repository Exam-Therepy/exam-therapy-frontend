import Image from "next/image"
import Link from "next/link"

export default function Card(param) { 
    return(
      <div className="max-w-sm rounded overflow-hidden shadow-md sm:w-full">
        <img className="w-full h-32" src="/cn.png" alt="Sunset in the mountains"/>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">GATE MOCK TEST</div>
        <ul className="text-gray-700 text-base">
          <li>Computer Networks</li>
          <li>Full Subject</li>
          <li>Ratings : 4.9/5</li>
        </ul>
      </div>
      <div className="px-6 pb-5">
         <Link href="/viewtest/123">
         <button className="bg-blue-700 hover:bg-blue-700 text-white py-2 px-4 rounded-full text-sm">
           View Test Series
         </button>
         </Link>
      </div>
    </div>        
    )
 }