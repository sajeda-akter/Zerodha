import { CiCircleAlert } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";

import "./GraphCards.css";
import useAllfetch from "../../AllFetch/useAllfetch";
const GraphCards = () => {

  const [oscilator,movies,dataLength,setDataLength,setDataLengthOsci,dataLengthOsci]=useAllfetch()



  return (
    <div className="lg:w-8/12 mt-16  mx-auto grid grid-cols-1 gap-8 lg:grid-cols-2">
      {/* it's for summary */}
      <div className="card lg:w-4/5 w-96 mx-auto bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-medium ">Summary</h2>
            <div
              className="tooltip  tooltip-left "
              data-tip="Here is a Snapshot of the most popular technical indicators. We take these into consideration, analyze them, run some internal calculations and help you understand the overall market conditions."
            >
              <CiCircleAlert className="text-2xl text-gray-300 hover:text-blue-600" />
            </div>
          </div>
          <div className="">
            <img
            id="first_graph"
              className="w-5 absolute top-32 right-36 lg:right-48"
              src="https://technicals.zerodha.com/static/media/pointer.c2b2a6c5.svg"
              alt=""
            />
            <img
              className="relative w-72 mx-auto my-8"
              src="https://technicals.zerodha.com/static/media/bar.8505e185.svg"
              alt=""
            />
          </div>
          <div className="grid grid-cols-3 justify-center w-72 mx-auto my-3 items-center">
            <div className="text-center">
              <p>3</p>
              <p className="text-[#E72929] bg-[#FFBBBB] w-20 mx-auto p-1 text-[11px] rounded-md ">
                Bearish
              </p>
            </div>
            <div className="text-center">
              <p>10</p>
              <p className="text-[#50727B] bg-[#D6DAC8] w-20 mx-auto p-1 text-[11px] rounded-md">
                Neutral
              </p>
            </div>
            <div className="text-center">
              <p>14</p>
              <p className="text-[#65B741] bg-[#C1F2B0] w-20 mx-auto p-1 text-[11px] rounded-md">
                Bullish
              </p>
            </div>
          </div>
          <div className=" grid grid-cols-3 gap-12 ml-8">
            <div className="text-[#191919]">
              <div>
                <div>
                  <p className="font-medium"> 22076.49</p>
                  <p className="text-gray-400">EMA (20)</p>
                </div>
                <div>
                  <p className="font-medium">-96.92</p>
                  <p className="text-gray-400">Awesome Osc.</p>
                </div>
              </div>
            </div>
            <div>
              <div>
                <p className="font-medium">22159.61</p>
                <p className="text-gray-400">SMA(20)</p>
              </div>
              <div>
                <p className="font-medium">14.42</p>
                <p className="text-gray-400">Macd (12,26,9)</p>
              </div>
            </div>
            <div>
              <div>
                <p className="font-medium">51.48</p>
                <p className="text-gray-400">RSI(14)</p>
              </div>
              <div>
                <p className="font-medium">-43.90</p>
                <p className="text-gray-400">CCl(20)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* it's for  support and resistance*/}
      <div className="card lg:w-4/5 w-96 mx-auto bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-medium ">Support & Resistance</h2>
            <div
              className="tooltip  tooltip-left "
              data-tip="Support: Support prevents the price from falling further. It is a price point on the chart where the trader expects maximum demand (in terms of buying) coming into the stock/index. Whenever the price falls to the support line, it is likely to bounce back. Resistance is something that stops the price from rising further. The resistance level is a price point on the chart where traders expect maximum supply (in terms of selling) for the stock/index. The resistance level is always above the current market price."
            >
              <CiCircleAlert className="text-2xl text-gray-300 hover:text-blue-600" />
            </div>
          </div>
          <div className="">
            <img
            id="second_graph"
              className="w-4 absolute top-32 right-36 lg:right-56"
              src="https://technicals.zerodha.com/static/media/pointer_resistance.645dfcd4.svg"
              alt=""
            />
            <img
              className="relative w-72 mx-auto mt-8"
              src="https://technicals.zerodha.com/static/media/bar_resistance.eb8d6baa.svg"
              alt=""
            />
          </div>
          <div className="flex justify-between w-72 mx-auto mb-5">
            <div className="flex gap-8">
              <p>S3</p>
              <p>S2</p>
              <p>S1</p>
            </div>
            <div className="flex gap-8">
              <p>R1</p>
              <p>R2</p>
              <p>R3</p>
            </div>
          </div>
          <div className=" grid grid-cols-3 gap-12 ml-8 mt-12">
            <div className="text-[#191919]">
              <div>
                <div>
                  <p className="font-medium"> 21576.17</p>
                  <p className="text-gray-400">S1</p>
                </div>
                <div>
                  <p className="font-medium">21169.53</p>
                  <p className="text-gray-400">S2</p>
                </div>
              </div>
            </div>
            <div>
              <div>
                <p className="font-medium">20402.23</p>
                <p className="text-gray-400">S3</p>
              </div>
              <div>
                <p className="font-medium">22343.47</p>
                <p className="text-gray-400">R1</p>
              </div>
            </div>
            <div>
              <div>
                <p className="font-medium">22704.13</p>
                <p className="text-gray-400">R2</p>
              </div>
              <div>
                <p className="font-medium">23471.43</p>
                <p className="text-gray-400">R3</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* it's for   moving averages*/}
      <div className="card lg:w-4/5 w-96 mx-auto bg-base-100 shadow-xl ">
        <div className="card-body">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-medium ">Moving averages</h2>
        
          </div>
          <div className="">
            <img
            id="third_graph"
              className="w-5 absolute top-32 right-16 lg:right-32"
              src="https://technicals.zerodha.com/static/media/pointer.c2b2a6c5.svg"
              alt=""
            />
            <img
              className="relative w-72 mx-auto my-8"
              src="https://technicals.zerodha.com/static/media/bar_ma.1ee3ecd8.svg"
              alt=""
            />
          </div>
          <div className="grid grid-cols-3 justify-center w-72 mx-auto my-3 items-center">
            <div className="text-center">
              <p>3</p>
              <p className="text-[#E72929] bg-[#FFBBBB] w-20 mx-auto p-1 text-[11px] rounded-md ">
                Bearish
              </p>
            </div>
            <div className="text-center">
              <p>10</p>
              <p className="text-[#50727B] bg-[#D6DAC8] w-20 mx-auto p-1 text-[11px] rounded-md">
                Neutral
              </p>
            </div>
            <div className="text-center">
              <p>14</p>
              <p className="text-[#65B741] bg-[#C1F2B0] w-20 mx-auto text-[11px]  p-1 rounded-md">
                Bullish
              </p>
            </div>
          </div>

          <div>
            {movies.slice(0, dataLength).map((movie) => (
              <div key={movie.id} className="text-[14px] w-72 mx-auto flex gap-32 mb-3">
                <p>
                  <span
                    className="px-1 rounded-sm"
                    style={{
                      color: movie.text_color,
                      backgroundColor: movie.bg,
                    }}
                  >
                    {movie.symbol}
                  </span>{" "}
                  <span>{movie.title}</span>
                </p>
                <p>{movie.total}</p>
                
              </div>
              
            ))}
            <div className={dataLength ===movies.length && 'hidden'}>
          <button onClick={()=>setDataLength(movies.length)} className="flex text-gray-400 lg:ml-52 ml-44 items-center gap-2">
              View Details
              <IoIosArrowDown />{" "}
            </button>{" "}
          </div>
          <div className={dataLength === movies.length ? 'block':'hidden'}>
          <button onClick={()=>setDataLength(movies.slice(0,2).length)} className="flex text-gray-400 ml-44 lg:ml-52 items-center gap-2">
              View Less
              <IoIosArrowDown />{" "}
            </button>{" "}
          </div>
         
          </div>
        </div>
      </div>
     
     {/* oscillator */}
      <div className="card lg:w-4/5 w-96 mx-auto bg-base-100 shadow-xl max-h-full">
        <div className="card-body">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-medium ">Oscillators</h2>
            <div
              className="tooltip  tooltip-left "
              data-tip="They form a majority of the leading technical indicators and they oscillate between a local minimum & maximum. The interpretation varies based on the position of the oscillator on the chart."
            >
              <CiCircleAlert className="text-2xl text-gray-300 hover:text-blue-600" />
            </div>
          </div>
          <div className="">
            <img
            id="fourth_graph"
              className="w-5 absolute top-32 right-40 lg:right-60"
              src="https://technicals.zerodha.com/static/media/pointer.c2b2a6c5.svg"
              alt=""
            />
            <img
              className="relative w-72 mx-auto my-8"
              src="https://technicals.zerodha.com/static/media/bar_oscillator.ed2bf1c3.svg"
              alt=""
            />
          </div>
          <div className="grid grid-cols-3 justify-center w-72 mx-auto my-3 items-center">
            <div className="text-center">
              <p>3</p>
              <p className="text-[#E72929] bg-[#FFBBBB] w-20 mx-auto p-1 text-[11px] rounded-md ">
                Bearish
              </p>
            </div>
            <div className="text-center">
              <p>10</p>
              <p className="text-[#50727B] bg-[#D6DAC8] w-20 mx-auto p-1 text-[11px] rounded-md">
                Neutral
              </p>
            </div>
            <div className="text-center">
              <p>14</p>
              <p className="text-[#65B741] bg-[#C1F2B0] w-20 mx-auto p-1 text-[11px] rounded-md">
                Bullish
              </p>
            </div>
          </div>

          <div>
            {oscilator.slice(0, dataLengthOsci).map((osci) => (
              <div key={osci.id} className="text-[14px] w-72 mx-auto flex gap-24 mb-3">
                <p>
                  <span
                    className="px-1 rounded-sm"
                    style={{
                      color: osci.text_color,
                      backgroundColor: osci.bg,
                    }}
                  >
                    {osci.symbol}
                  </span>{" "}
                  <span className="">{osci.title}</span>
                </p>
                <p className="text-right">{osci.total}</p>
              </div>
            ))}
            <div>
             
            </div>
          <div className={dataLengthOsci ===oscilator.length && 'hidden'}>
          <button onClick={()=>setDataLengthOsci(oscilator.length)} className="flex text-gray-400 lg:ml-52 ml-44 items-center gap-2">
              View Details
              <IoIosArrowDown />{" "}
            </button>{" "}
          </div>
          <div className={dataLengthOsci === oscilator.length ? 'block':'hidden'}>
          <button onClick={()=>setDataLengthOsci(oscilator.slice(0,2).length)} className="flex text-gray-400 ml-44 lg:ml-52 items-center gap-2">
              View Less
              <IoIosArrowDown />{" "}
            </button>{" "}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphCards;
