const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-gradient-to-b from-blue-500 to-blue-700 text-white flex flex-col">
      <div className="p-4">
        <h1 className="text-2xl font-semibold">Your App</h1>
        <p className="text-sm mt-2">Welcome back, User!</p>
      </div>
      <nav className="flex-1 overflow-y-auto">
        <a href="#" className="block py-2 px-4 text-sm hover:bg-blue-600">Dashboard</a>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-blue-600">Projects</a>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-blue-600">Messages</a>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-blue-600">Settings</a>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-blue-600">Logout</a>
      </nav>
      <div className="p-4 border-t border-blue-400">
        <p className="text-sm">&copy; 2024 Your App</p>
      </div>
    </div>
  );
};

export default Sidebar;
