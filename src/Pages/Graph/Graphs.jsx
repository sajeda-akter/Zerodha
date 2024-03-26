import { IoIosArrowBack } from "react-icons/io";
import Footer from "../Footer/Footer";
import GraphCards from "./GraphCards/GraphCards";
import MovingTime from "./MovingTime/MovingTime";
import { FaArrowDown } from "react-icons/fa";

const Graphs = () => {
    return (
        <div  className="bg-[#f5ffff] min-h-screen ">
       
       <div className="sticky top-[70px] z-30 w-full bg-[#f5ffff] flex  flex-col lg:flex-row ">
       <div className=" flex flex-col lg:ml-52">
       <div className="flex gap-2 items-center mt-5">
       <IoIosArrowBack className="text-xl"/>
            <img className="w-6" src="https://technicals.zerodha.com/static/media/NSE.62a33981.svg" alt="" />
            <p className="text-2xl font-medium">NIFTY 50</p>
           
       </div>
           
            <div className="flex flex-row items-center gap-1 ml-5">
            <p>₹22004.70</p>
            <FaArrowDown className="text-red-500"/>
            <p className="text-red-500">(-0.42%)</p>
            </div>

        </div>
        <MovingTime/>
       </div>
        
       <GraphCards/>
       <Footer/>
        </div>
    );
};

export default Graphs;