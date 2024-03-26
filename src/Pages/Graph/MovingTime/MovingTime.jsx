import { useState } from "react";

const MovingTime = () => {
  // State to track the selected time
  const [selectedTime, setSelectedTime] = useState(null);

  // Function to handle button click
  const handleButtonClick = (time) => {
    console.log(time)
      setSelectedTime(time);
  };

  const formatTime = (time) => {
    if (time === 60) return "1 Hour";
    if (time === 1440) return "1 Day";
    return `${time} Minutes`;
};
   


    return (
        <div  className="bg-[#fff] text-center shadow-md lg:sticky  lg:top-20  lg:left-2/4 text-gray-400 font-medium w-11/12 mx-auto fixed bottom-0 lg:w-1/4 h-12 py-1 px-4 flex justify-around items-center ml-4 lg:ml-0">
                 <button 
                    onClick={() => handleButtonClick(5)} 
                    style={{ 
                        backgroundColor: selectedTime === 5 ? 'blue' : 'transparent',
                        color: selectedTime === 5 ? '#fff' : '#9CAFAA',
                        padding: '3px',
                        borderRadius:'3px'
                    }}
                >
                    {selectedTime === 5 ? formatTime(5) : '5 Min'}
                </button>
                <button 
                    onClick={() => handleButtonClick(10)} 
                    style={{ 
                        backgroundColor: selectedTime === 10 ? 'blue' : 'transparent',
                        color: selectedTime === 10 ? '#fff' : '#9CAFAA',
                        padding: '3px',
                        borderRadius:'3px'
                    }}
                >
                    {selectedTime === 10 ? formatTime(10) : '10 Min'}
                </button>
                <button 
                    onClick={() => handleButtonClick(15)} 
                    style={{ 
                        backgroundColor: selectedTime === 15 ? 'blue' : 'transparent',
                        color: selectedTime === 15 ? '#fff' : '#9CAFAA',
                        padding: '3px',
                        borderRadius:'3px'
                    }}
                >
                    {selectedTime === 15 ? formatTime(15) : '15 Min'}
                </button>
                <button 
                    onClick={() => handleButtonClick(30)} 
                    style={{ 
                        backgroundColor: selectedTime === 30 ? 'blue' : 'transparent',
                        color: selectedTime === 30 ? '#fff' : '#9CAFAA',
                        padding: '3px',
                        borderRadius:'3px'
                    }}
                >
                    {selectedTime === 30 ? formatTime(30) : '30 Min'}
                </button>
                <button 
                    onClick={() => handleButtonClick(60)} 
                    style={{ 
                        backgroundColor: selectedTime === 60 ? 'blue' : 'transparent',
                        color: selectedTime === 60 ? '#fff' : '#9CAFAA',
                        padding: '3px',
                        borderRadius:'3px'
                    }}
                >
                    {selectedTime === 60 ? formatTime(60) : 'hour'}
                </button>
                <button 
                    onClick={() => handleButtonClick(1440)} 
                    style={{ 
                        backgroundColor: selectedTime === 1440 ? 'blue' : 'transparent',
                        color: selectedTime === 1440 ? '#fff' : '#9CAFAA',
                        padding: '3px',
                        borderRadius:'3px'
                    }}
                >
                    {selectedTime === 1440 ? formatTime(1440) : 'day'}
                </button>
        </div>
    );
};

export default MovingTime;