import { useEffect, useState } from "react";

const useAllfetch = () => {
   // all oscilators fetching info
   const [oscilator,setOscilator]=useState([])
   const [dataLengthOsci, setDataLengthOsci] = useState(2);
 useEffect(()=>{
    fetch('oscillators.json')
    .then(res=>res.json())
    .then(data=>setOscilator(data))
 },[])

//  moving averages fetching
const [movies, setMovies] = useState([]);
const [dataLength, setDataLength] = useState(2);
useEffect(() => {
  fetch("movings.json")
    .then((res) => res.json())
    .then((data) => setMovies(data));
}, []);


    return [oscilator,movies,dataLength,setDataLength,setDataLengthOsci,dataLengthOsci]
};

export default useAllfetch;