import Link from "next/link"

export default function viewtest({ params }) {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden md:flex">
          {/* Image Section */}
          <div className="md:w-1/2">
            <img
              className="object-cover w-full h-64 md:h-full"
              src="https://via.placeholder.com/600x400"
              alt="Exam Image"
            />
          </div>
          {/* Details Section */}
          <div className="p-8 md:w-1/2">
            <h2 className="text-4xl font-semibold text-gray-800 mb-4">
              NEET MOCK TEST 2024
            </h2>
            <p className="text-lg text-gray-600 mb-4">Physics</p>
            <div className="flex items-center text-lg text-gray-600 mb-4">
              <span className="mr-8">
                No of Questions: <span className="font-semibold">20</span>
              </span>
              <span className="mr-8">
                Max Marks: <span className="font-semibold">100</span>
              </span>
            </div>
            <p className="text-lg text-gray-600 mb-4">
              Time: <span className="font-semibold">2 hours</span>
            </p>
            <p className="text-lg text-gray-600 mb-4">
              Price: <span className="font-semibold">399 INR</span>
            </p>
            <Link href="/exam/id233" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline">
            Attempt Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}