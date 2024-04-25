'use client'

import { useState } from "react";



export default function Sidebar (){
    const [activeCategory, setActiveCategory] = useState(null);

    let categories=['NEET', 'JEE', 'BANK PO', 'SSC', 'GATE', 'NET','NEET', 'JEE', 'BANK PO', 'SSC', 'GATE', 'NET']
  
    return (
      <div className="h-screen bg-white p-4 shadow-md mt-3 mx-2">
        <h2 className="text-xl font-bold mb-4 mx-5">Categories</h2>
        <ul className="mx-5">
          {categories.map((category, index) => (
            <li 
              key={index} 
              className={`py-2 ${activeCategory === index ? 'bg-gray-300' : ''}`}
              onMouseEnter={() => setActiveCategory(index)}
              onMouseLeave={() => setActiveCategory(null)}
            >
              <a 
                href="#" 
                className={`text-gray-900 flex items-center justify-between ${activeCategory === index ? 'text-gray-800 font-bold' : ''}`}
              >
                {category}
                {activeCategory === index}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };