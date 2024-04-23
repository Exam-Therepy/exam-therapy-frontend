import Card from '@/components/AllMocks/Card'
const categories = ['NEET', 'JEE', 'BANK PO', 'SSC', 'GATE', 'NET'];

const Sidebar = () => {
  return (
    <div className="h-screen w-1/5 bg-gray-200 p-4">
      <h2 className="text-xl font-bold mb-4 mx-5">Categories</h2>
      <ul className="mx-5">
        {categories.map((category, index) => (
          <li key={index} className="py-2">
            <a href="#" className="text-gray-900 hover:underline">{category}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Content = () => {
  return (
    <div className="p-4 h-screen grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 w-full z-0">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </div>
  );
};

const viewAll = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Content />
    </div>
  );
};

export default viewAll;
