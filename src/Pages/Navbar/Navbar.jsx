import { Link } from "react-router-dom";

const Navbar = () => {
    const menuItems=<>
    
    <li className="font-medium bg-white"><Link to='/'>Home</Link></li>
    <li className="mx-2 font-medium focus:bg-blue-500 focus:text-white bg-blue-500 rounded-md text-white"><Link to='/'>Signup</Link></li>
    
    </>
    return (
        <div className="navbar bg-[#fff] shadow z-30 sticky top-0">
        <div className="flex-1 lg:ml-24 ">
          <a className=" text-xl" href="https://technicals.zerodha.com/dashboard" target="_blank">
            <img className="w-28 opacity-70" src="/src/assets/logo-home.png" alt="" />
          </a>
          <div className="w-[1px] h-8 bg-gray-300 ml-3"></div>
          <a className="ml-2 text-xl" href="https://technicals.zerodha.com/dashboard" target="_blank">
            <span className="text-[11px] text-gray-300 ml-2">Powered by</span>
            <div>
                <img className="w-16 " src="/src/assets/logos.png" alt="" />
            </div>
          </a>
        </div>
        <div className="flex-none lg:mr-32">
          <ul className="menu menu-horizontal px-1">
           {menuItems}
          </ul>
        </div>
      </div>
    );
};

export default Navbar;