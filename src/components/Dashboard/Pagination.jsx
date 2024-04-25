const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [...Array(totalPages).keys()].map((page) => page + 1);

  return (
    <nav className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6 ">
      <div className="hidden sm:block">
        <p className="text-sm leading-5 text-gray-700">
          Page <span className="font-medium">{currentPage}</span> of <span className="font-medium">{totalPages}</span>
        </p>
      </div>
      <div className="flex-1 flex justify-between sm:justify-end">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 ${
            currentPage === 1 ? 'cursor-not-allowed' : ''
          }`}
        >
          Previous
        </button>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 ${
            currentPage === totalPages ? 'cursor-not-allowed' : ''
          }`}
        >
          Next
        </button>
      </div>
    </nav>
  );
};

export default Pagination;
