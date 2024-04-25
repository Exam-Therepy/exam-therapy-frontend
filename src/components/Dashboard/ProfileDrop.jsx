import { useState } from 'react';
import { useUser } from "@auth0/nextjs-auth0/client";
import { Avatar } from '@nextui-org/react';
import Link from 'next/link';

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    
  };

  const {user}=useUser();

  return (
    <div className="relative">
      <button onClick={toggleDropdown}> <Avatar isBordered size="sm" /></button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-md z-10">
          <button
            onClick={() => console.log('My Profile clicked')}
            className="block w-full px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
          >
            My Profile
          </button>
          <button
            onClick={() => console.log('Payment clicked')}
            className="block w-full px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
          >
            Payment
          </button>
          <button
            onClick={handleLogout}
            className="block w-full px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
