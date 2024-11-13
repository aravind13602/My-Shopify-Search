import { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen bg-gray-100 p-4">
        <SearchBar />
      </div>
    </>
  )
}

export default App
// import React, { useState, useEffect } from 'react';
// import SearchBar from './components/SearchBar';

// const App = () => {
//   // State to control search bar expansion
//   const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  
//   // Global keyboard shortcut handler
//   useEffect(() => {
//     const handleKeyPress = (e) => {
//       // Handle Ctrl/Cmd + K
//       if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
//         e.preventDefault();
//         setIsSearchExpanded(prev => !prev);
//       }
      
//       // Handle Escape key to collapse search
//       if (e.key === 'Escape' && isSearchExpanded) {
//         e.preventDefault();
//         setIsSearchExpanded(false);
//       }
//     };

//     // Add event listener
//     document.addEventListener('keydown', handleKeyPress);
    
//     // Cleanup
//     return () => {
//       document.removeEventListener('keydown', handleKeyPress);
//     };
//   }, [isSearchExpanded]);

//   // Sample data for search (you can replace this with your actual data)
//   const searchData = {
//     apps: ['Shopify Email', 'Facebook Shop', 'Google Shopping'],
//     customers: ['John Doe', 'Jane Smith', 'Bob Wilson'],
//     orders: ['#1001', '#1002', '#1003'],
//     products: ['T-Shirt', 'Jeans', 'Sneakers'],
//     'sales channels': ['Online Store', 'Facebook', 'Instagram']
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Header */}
//       <header className="bg-zinc-900 border-b border-gray-200">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16">
//             {/* Logo or brand name */}
//             <div className="flex-shrink-0 flex items-center">
//               <h1 className="text-white text-xl font-semibold">My Store</h1>
//             </div>

//             {/* Main search bar */}
//             <div className="flex-1 max-w-3xl mx-4">
//               <SearchBar 
//                 isExpanded={isSearchExpanded}
//                 setIsExpanded={setIsSearchExpanded}
//                 searchData={searchData}
//               />
//             </div>

//             {/* Additional header items */}
//             <div className="flex items-center space-x-4">
//               <button className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
//                 Help
//               </button>
//               <button className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
//                 Settings
//               </button>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Main content */}
//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <div className="bg-white rounded-lg shadow p-6">
//           <h2 className="text-2xl font-semibold text-gray-900 mb-4">
//             Welcome to Your Dashboard
//           </h2>
//           <p className="text-gray-600">
//             Press <kbd className="px-2 py-1 bg-gray-100 rounded">Ctrl</kbd> + <kbd className="px-2 py-1 bg-gray-100 rounded">K</kbd> to open search
//           </p>
//         </div>

//         {/* Example content sections */}
//         <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {/* Orders Section */}
//           <div className="bg-white rounded-lg shadow p-6">
//             <h3 className="text-lg font-medium text-gray-900 mb-2">Recent Orders</h3>
//             <p className="text-gray-600">No orders to display</p>
//           </div>

//           {/* Products Section */}
//           <div className="bg-white rounded-lg shadow p-6">
//             <h3 className="text-lg font-medium text-gray-900 mb-2">Popular Products</h3>
//             <p className="text-gray-600">No products to display</p>
//           </div>

//           {/* Customers Section */}
//           <div className="bg-white rounded-lg shadow p-6">
//             <h3 className="text-lg font-medium text-gray-900 mb-2">New Customers</h3>
//             <p className="text-gray-600">No customers to display</p>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default App;