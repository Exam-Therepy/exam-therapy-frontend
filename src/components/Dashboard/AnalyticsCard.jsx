const AnalyticsCard = () => {
  return (
    <div className="container mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {/* Analytics Cards */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold mb-2">Total Mock Test Created</h2>
        <p className="text-3xl font-bold">65</p>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold mb-2">Revenue</h2>
        <p className="text-3xl font-bold">10,000 INR</p>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold mb-2">Total Purchase</h2>
        <p className="text-3xl font-bold">1000</p>
      </div>
      {/* More Analytics Cards */}
    </div>
    {/* Additional Sections or Charts */}
  </div>
  )
}

export default AnalyticsCard