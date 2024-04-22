export default function Card(param) {
    return (
        <div className="p-3 bg-white border border-gray-200 rounded-lg shadow-md h-44 w-44 flex flex-col justify-center">
            <div className="flex justify-center">
                <img src="/gate.png" alt="Logo" className="w-16 h-16" />
            </div>
            <div className="text-center">
                <h2 className="text-lg font-bold text-gray-800">GATE & NET</h2>
            </div>
        </div>
    )
}