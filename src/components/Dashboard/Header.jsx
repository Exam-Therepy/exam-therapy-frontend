'use client'
import Profile from './ProfileDrop'
import { FaBars } from 'react-icons/fa';

const Header = ({ toggleSidebar }) => {
  return (
    <header className="bg-white shadow-md">
      <div className="flex justify-between items-center px-4 py-2">
        <button
          className="text-gray-700 focus:outline-none"
          onClick={toggleSidebar}
        >
         <FaBars/>
        </button>
        <div className="text-lg font-semibold">Mock Test Admin Dashboard</div>
         <Profile/>
      </div>
    </header>
  );
};

export default Header;
