import { FaEye } from "react-icons/fa";

const Table = ({ data, currentPage, itemsPerPage }) => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = data.slice(startIndex, endIndex);

  return (
    <table className="min-w-full bg-white p-4 shadow-lg rounded-lg">
      <thead>
        <tr>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
            ID
          </th>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
            Exam Name
          </th>

         <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
            Subject Name
        </th>

        <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
          Price
        </th>

        <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
          Revenue
       </th>

       <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
         Action
       </th>

        </tr>
      </thead>
      <tbody>
        {currentItems.map((item, index) => (
          <tr key={startIndex + index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
            <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">{startIndex + index + 1}</td>
            <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">{item.examName}</td>
            <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">{item.subjectName}</td>
            <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">{item.price}</td>
            <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">{item.revenue}</td>
            <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500"><FaEye/></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
