'use client'
import AnalyticsCard from '@/components/Dashboard/AnalyticsCard'
import SalesChart from '@/components/Dashboard/SalesChart'

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

 

  return (
    <>
      <AnalyticsCard />
        <div className="container max-w-3xl mt-10">
          <SalesChart salesData={salesData} />
        </div>
    </>
  );
};

export default CreatorDashboard;
