

export const PrimaryLoader = () => (
  <>
    <div className="backdrop-blur-sm fixed top-0 left-0 w-full h-full bg-[#0000007d]"></div>
    <div className="flex items-center justify-center min-h-screen p-5 min-w-screen">
      <div className="flex space-x-2 animate-pulse">
        <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
        <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
        <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
      </div>
    </div>
  </>  
)
