import axios from 'axios';
import  { useEffect, useState } from 'react'


export default function useDebounce(search , delay) {
  const [debounceValue, setDebounceValue] = useState(search);
  const [data,setData]=useState([]);

  useEffect(()=>{
    // const timer = setTimeout(() => {
    //     setDebounceValue(search);
    //     const getData = async(debounceValue)=>{
    //         const response = await axios.get('https://www.googleapis.com/books/v1/volumes?q='+debounceValue+'+intitle&key=AIzaSyAlL8IayhadzDoPiQsSev9wK3PsNeh8ZDA');
    //         setData(response.data.items);
    //         console.log(data);
    //     }
    //     getData(debounceValue);
    // }, delay);

    // return ()=>clearTimeout(timer);

  })
  
  return [debounceValue, data];
}
