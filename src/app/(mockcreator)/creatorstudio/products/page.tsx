'use client'
import { useState } from 'react';
import Table from '@/components/Dashboard/Table'
import Pagination from '@/components/Dashboard/Pagination';

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


export default function products(){
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5; // Change this value according to your requirement
  
    const totalPages = Math.ceil(sampleData.length / itemsPerPage);
  
    const handlePageChange = (page) => {
      if (page >= 1 && page <= totalPages) {
        setCurrentPage(page);
      }
    };
    return (
     <div className="container mx-auto shadow-md">
        <Table data={sampleData} currentPage={currentPage} itemsPerPage={itemsPerPage}/>
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      </div>
    )
}