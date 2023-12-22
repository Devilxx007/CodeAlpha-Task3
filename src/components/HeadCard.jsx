import { SocialIcon } from 'react-social-icons';
import PropTypes from 'prop-types';

const HeadCard = ({ url, isDarkMode,colorbar }) => {
  return (
    <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white'} w-[300px] rounded-xl shadow-md p-4`}>
      <div className={`bg-gradient-to-r h-[10px] ${colorbar} rounded-md`} ></div>
      <div className='flex flex-col'>
        <div className='flex justify-center items-center mt-1'>
          <SocialIcon url={url} />
          <h1 className={`text-${isDarkMode ? 'white' : 'black'} ml-2 text-3xl`}>Devil</h1>
        </div>
        <div>
          <h1 className={`text-${isDarkMode ? 'white' : 'black'} text-[60px] text-center font-bold`}>2005</h1>
          <h2 className={`text-${isDarkMode ? 'white' : 'black'} text-[25px] text-center`}>Followers</h2>
        </div>
        <div>
          <h2 className={`text-center ${isDarkMode ? 'text-green-300' : 'text-green-500'}`}>+12</h2>
        </div>
      </div>  
    </div>
  );
};
HeadCard.propTypes = {
    url: PropTypes.string.isRequired,
    isDarkMode: PropTypes.bool.isRequired,
    colorbar:PropTypes.string.isRequired,
  };

export default HeadCard;
