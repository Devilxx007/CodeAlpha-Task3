import PropTypes from 'prop-types';
import { UserButton } from '@clerk/clerk-react';
const Nav = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <nav className={`flex flex-col items-center ${isDarkMode ? "bg-slate-900" : "bg-gray-400"} h-[230px] w-full rounded-2xl`}>
      <div>
        <h1 className={`text-${isDarkMode ? 'white' : 'black'} text-3xl font-bold`}>Social Media Dashboard</h1>
      </div>
      <div>
        <button
          className={`p-2 mt-4 rounded-md ${isDarkMode ? 'bg-red-600' : 'bg-red-600'} text-white`}
          onClick={toggleDarkMode}
        >
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
        {isDarkMode ? console.log("CLick"):console.log("No")}
      </div>
      <div className=' border rounded-2xl shadow-xl' >
        <UserButton/>
      </div>
    </nav>
  );
};
Nav.propTypes = {
    isDarkMode: PropTypes.bool.isRequired,
    toggleDarkMode: PropTypes.func.isRequired,
  };

export default Nav;
