import Profile from './ProfileDrop'
import { FaBars } from 'react-icons/fa';

const Header = ({ toggleSidebar }) => {

  return (
   <header className="bg-[#EDF2F9] text-black">
    <div className="flex justify-between items-center px-5 py-3">
      <div className="flex items-center">
        <button
          className="text-blue-900 focus:outline-none mr-3"
          onClick={toggleSidebar}
        >
          <FaBars/>
        </button>
        <div className=" font-semibold">Mock Test Studio</div>
      </div>
      <div className="hidden md:block"> {/* Show on medium and larger screens */}
        <Profile/>
      </div>
    </div>
  </header>
  
  );
};

export default Header;
