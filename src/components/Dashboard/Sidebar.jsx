import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineUser, AiOutlineSetting, AiOutlinePlusSquare, AiFillDashboard, AiTwotoneDashboard, AiOutlineDash } from 'react-icons/ai';
import { FaUsers } from 'react-icons/fa';
import { MdDashboard } from "react-icons/md";

const Sidebar = ({ isSmall }) => {
  const [activeLink, setActiveLink] = useState('');

  const handleSetActiveLink = (link) => {
    setActiveLink(link);
  };

  return (
    <aside className={`bg-[#EDF2F9] ${isSmall ? 'w-30' : 'w-64'} transition-all duration-300`}>
      <div className="p-4">
        <div className="mb-4">
          {isSmall? <span></span> :<div className="flex flex-col items-center justify-center w-full h-32 bg-sky-400 text-white rounded-md mb-2">
          <h2>Wallet</h2>
          <span>10000 INR</span>
        </div>}
        </div>
        <nav>
          <ul>
            <li>
              <Link href="/creatorstudio"
                  className={`flex items-center py-2 px-4 text-sm ${activeLink === 'dashboard' ? 'bg-gray-200 text-gray-900' : 'text-gray-800 hover:bg-gray-200'}`}
                  onClick={() => handleSetActiveLink('dashboard')}
                >
                  <MdDashboard className={`h-6 w-6 ${isSmall ? 'mr-0' : 'mr-2'}`} />
                  {!isSmall && 'Dashboard'}
              </Link>
            </li>
            <li>
              <Link href="/creatorstudio/createmock"
              
                  className={`flex items-center py-2 px-4 text-sm ${activeLink === 'createmock' ? 'bg-gray-200 text-gray-900' : 'text-gray-800 hover:bg-gray-200'}`}
                  onClick={() => handleSetActiveLink('createmock')}
                >
                  <AiOutlinePlusSquare className={`h-6 w-6 ${isSmall ? 'mr-0' : 'mr-2'}`} />
                  {!isSmall && 'Create Mock'}
            
              </Link>
            </li>
            <li>
              <a
                href="#"
                className={`flex items-center py-2 px-4 text-sm ${activeLink === 'customers' ? 'bg-gray-200 text-gray-900' : 'text-gray-800 hover:bg-gray-200'}`}
                onClick={() => handleSetActiveLink('customers')}
              >
                <AiOutlineUser className={`h-6 w-6 ${isSmall ? 'mr-0' : 'mr-2'}`} />
                {!isSmall && 'Customers'}
              </a>
            </li>
            <li>
              <Link
                href="/creatorstudio/products"
                className={`flex items-center py-2 px-4 text-sm ${activeLink === 'products' ? 'bg-gray-200 text-gray-900' : 'text-gray-800 hover:bg-gray-200'}`}
                onClick={() => handleSetActiveLink('products')}
              >
                <FaUsers className={`h-6 w-6 ${isSmall ? 'mr-0' : 'mr-2'}`} />
                {!isSmall && 'Products'}
              </Link>
            </li>
            <li>
              <a
                href="#"
                className={`flex items-center py-2 px-4 text-sm ${activeLink === 'settings' ? 'bg-gray-200 text-gray-900' : 'text-gray-800 hover:bg-gray-200'}`}
                onClick={() => handleSetActiveLink('settings')}
              >
                <AiOutlineSetting className={`h-6 w-6 ${isSmall ? 'mr-0' : 'mr-2'}`} />
                {!isSmall && 'Settings'}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
