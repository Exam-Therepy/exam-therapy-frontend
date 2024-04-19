import Link from 'next/link';
import { AiOutlineDashboard, AiOutlineUser, AiOutlineSetting, AiOutlinePlusSquare } from 'react-icons/ai';
import { FaUsers } from 'react-icons/fa';

const Sidebar = ({ isSmall }) => {
  return (
    <aside className={`bg-white shadow-md ${isSmall ? 'w-20' : 'w-64'} transition-all duration-300`}>
      <nav className="p-4 mt-10">      
        <ul>
          <li>
            <Link
              href="/dashboard"
              className="flex items-center py-2 px-4 text-gray-800 hover:bg-gray-100"
            >
              <AiOutlineDashboard className={`h-6 w-6  ${isSmall ? 'mr-0' : 'mr-2'}`} />
              {!isSmall && 'Dashboard'}
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/createmock"
              className="flex items-center py-2 px-4 text-gray-800 hover:bg-gray-100"
            >
              <AiOutlinePlusSquare className={`h-6 w-6  ${isSmall ? 'mr-0' : 'mr-2'}`} />
              {!isSmall && 'Create Mock'}
            </Link>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center py-2 px-4 text-gray-800 hover:bg-gray-100"
            >
              <AiOutlineUser className={`h-6 w-6  ${isSmall ? 'mr-0' : 'mr-2'}`} />
              {!isSmall && 'Customers'}
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center py-2 px-4 text-gray-800 hover:bg-gray-100"
            >
              <FaUsers className={`h-6 w-6  ${isSmall ? 'mr-0' : 'mr-2'}`} />
              {!isSmall && 'Products'}
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center py-2 px-4 text-gray-800 hover:bg-gray-100"
            >
              <AiOutlineSetting className={`h-6 w-6   ${isSmall ? 'mr-0' : 'mr-2'}`} />
              {!isSmall && 'Settings'}
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
