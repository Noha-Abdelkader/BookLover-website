import { useEffect, useRef } from "react";


 function usePrevState(initState){
    const prevState  = useRef();

useEffect(()=>{
    prevState.current = initState;
})
return prevState.current;
};

export default usePrevState;