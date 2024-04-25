'use client'
import { useState } from 'react';
import Table from '@/components/Dashboard/Table';
import Pagination from '@/components/Dashboard/Pagination';
import AnalyticsCard from '@/components/Dashboard/AnalyticsCard'
import SalesChart from '@/components/Dashboard/SalesChart'


const sampleData = [
  { id: 1, examName: 'Gate', subjectName: 'Algorithm', revenue: '1000', price:'399' },
  { id: 1, examName: 'Gate', subjectName: 'Algorithm', revenue: '1000', price:'399' },
  { id: 1, examName: 'Gate', subjectName: 'Algorithm', revenue: '1000', price:'399' },
  { id: 1, examName: 'Gate', subjectName: 'Algorithm', revenue: '1000', price:'399' },
  { id: 1, examName: 'Gate', subjectName: 'Algorithm', revenue: '1000', price:'399' },
  { id: 1, examName: 'Gate', subjectName: 'Algorithm', revenue: '1000', price:'399' },
  { id: 1, examName: 'Gate', subjectName: 'Algorithm', revenue: '1000', price:'399' },
  { id: 1, examName: 'Gate', subjectName: 'Algorithm', revenue: '1000', price:'399' }


  // Add more sample data as needed
];

const salesData = [
  { month: 'January', amount: 1000 },
  { month: 'February', amount: 1500 },
  { month: 'March', amount: 2000 },
  { month: 'April', amount: 1800 },
  { month: 'May', amount: 2500 },
  { month: 'June', amount: 2200 },
  { month: 'July', amount: 2800 },
  { month: 'August', amount: 3000 },
  { month: 'September', amount: 3200 },
  { month: 'October', amount: 2800 },
  { month: 'November', amount: 3500 },
  { month: 'December', amount: 4000 },
];

const CreatorDashboard = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Change this value according to your requirement

  const totalPages = Math.ceil(sampleData.length / itemsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (

    <>
      <AnalyticsCard />
        <div className="container max-w-3xl mt-10">
          <SalesChart salesData={salesData} />
        </div>
      <div className="container mx-auto mt-10">
        <Table data={sampleData} currentPage={currentPage} itemsPerPage={itemsPerPage}/>
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      </div>
    </>
  );
};

export default CreatorDashboard;
