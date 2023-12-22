import { SocialIcon } from 'react-social-icons';
import PropTypes from 'prop-types';

const ContCard = ({ url,isDarkMode,title }) => {
  return (
    <div className={`${isDarkMode ? 'bg-slate-900' : 'bg-white'} w-[350px] h-[150px] flex flex-col rounded-lg shadow-md`}>
      <div className='flex flex-row mt-5 ml-2 mr-2 items-center justify-between'>
        <h1 className={`text-${isDarkMode ? 'white' : 'black'} text-[25px]`}>{title}</h1>
        <SocialIcon url={url} />
      </div>
      <div className='flex flex-row mt-4 mr-2 ml-2 items-center justify-between'>
        <h1 className={`text-${isDarkMode ? 'white' : 'black'} text-[30px]`}>287</h1>
        <h2 className={`text-${isDarkMode ? 'green-300' : 'green-500'} text-[20px]`}>+25</h2>
      </div>
    </div>
  );
};
ContCard.propTypes = {
    url: PropTypes.string.isRequired,
    isDarkMode: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
  };

export default ContCard;
