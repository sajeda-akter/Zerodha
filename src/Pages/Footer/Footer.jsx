import logo from '../../assets/logos.png'
import mainLogo from '../../assets/logo-home.png'
import { FaCopyright } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='bg-[#D4E7C5] mt-12 p-10'>
          <div className='flex items-center gap-4 my-6'>
          <p className='text-gray-400 flex items-center'><span className='mr-1'><FaCopyright /></span>Powered by</p>
            <img className='w-16' src={logo} alt="" />
            
          </div>
          <div>
            <img className='w-32 opacity-50 mb-3' src={mainLogo} alt="" />
            <span className='text-gray-500 text-[15px]'>NSE &BSE-SEBI Registration No: INZO00031633 CDSL SEBI Registration No: IN-DP-431-2019</span>
          </div>
        </div>
    );
};

export default Footer;