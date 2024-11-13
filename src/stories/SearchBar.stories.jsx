// import SearchBar from '../components/SearchBar';

// const meta = {
//   title: 'Components/SearchBar',
//   component: SearchBar,
//   parameters: {
//     layout: 'centered',
//   },
// };

// export default meta;

// export const Default = {
//   render: () => <SearchBar />,
// };

// export const LightTheme = {
//   render: () => (
//     <div className="bg-gray-100 p-8">
//       <SearchBar showSearchIcon={true} />
//     </div>
//   ),
// };

// export const DarkTheme = {
//   render: () => (
//     <div className="bg-gray-900 p-8">
//       <SearchBar
//         showSearchIcon={true}
//         className="text-white"
//       />
//     </div>
//   ),
// };



// export const Responsive = {
//   render: () => (
//     <div className="w-full max-w-6xl mx-auto p-4">
//       <div className="w-full space-y-4">
//         {/* Mobile view */}
//         <div className="sm:hidden">
//           <SearchBar className="w-full" showSearchIcon={true} />
//         </div>

//         {/* Tablet view */}
//         <div className="hidden sm:block md:hidden">
//           <SearchBar className="w-3/4" showSearchIcon={true} />
//         </div>

//         {/* Desktop view */}
//         <div className="hidden md:block">
//           <SearchBar className="w-1/2" showSearchIcon={true} />
//         </div>
//       </div>
//     </div>
//   ),
//   parameters: {
//     viewport: {
//       defaultViewport: 'responsive',
//     },
//     layout: 'fullscreen',
//   },
// };

// Responsive.parameters = {
//   docs: {
//     description: {
//       story: 'A responsive SearchBar that adapts its width based on screen size:\n' +
//         '- Mobile (< 640px): Full width\n' +
//         '- Tablet (640px - 768px): 75% width\n' +
//         '- Desktop (> 768px): 50% width'
//     },
//   },
// };
import React from 'react';
import SearchBar from '../components/SearchBar';

const meta = {
  title: 'Components/SearchBar',
  component: SearchBar,
  parameters: {
    layout: 'centered',
  },
};

export default meta;


const lightThemeStyle = {
  backgroundColor: '#f7fafc',
  padding: '2rem',
};

const darkThemeStyle = {
  backgroundColor: '#2d2d2d', 
  padding: '2rem',
  color: '#ffffff', 
  borderRadius: '8px', 
};

const responsiveContainerStyle = {
  width: '100%',
  maxWidth: '96rem',
  margin: '0 auto',
  padding: '1rem',
};

const mobileStyle = {
  display: 'block',
  width: '100%',
};

const tabletStyle = {
  display: 'none',
  width: '75%',
  '@media (min-width: 640px)': {
    display: 'block',
  },
  '@media (min-width: 768px)': {
    display: 'none',
  },
};

const desktopStyle = {
  display: 'none',
  width: '50%',
  '@media (min-width: 768px)': {
    display: 'block',
  },
};


export const Default = {
  render: () => <SearchBar />,
};

export const LightTheme = {
  render: () => (
    <div style={lightThemeStyle}>
      <SearchBar showSearchIcon={true} />
    </div>
  ),
};

export const DarkTheme = {
  render: () => (
    <div style={darkThemeStyle}>
      <SearchBar showSearchIcon={true} />
    </div>
  ),
};

export const Responsive = {
  render: () => (
    <div style={responsiveContainerStyle}>
      <div style={mobileStyle}>
        <SearchBar showSearchIcon={true} />
      </div>
      <div style={tabletStyle}>
        <SearchBar showSearchIcon={true} />
      </div>
      <div style={desktopStyle}>
        <SearchBar showSearchIcon={true} />
      </div>
    </div>
  ),
  parameters: {
    viewport: {
      defaultViewport: 'responsive',
    },
    layout: 'fullscreen',
  },
};

Responsive.parameters = {
  docs: {
    description: {
      story: 'A responsive SearchBar that adapts its width based on screen size:\n' +
        '- Mobile (< 640px): Full width\n' +
        '- Tablet (640px - 768px): 75% width\n' +
        '- Desktop (> 768px): 50% width',
    },
  },
};