import { useEffect, useRef, useState } from "react";

export const useTimer = ( time, dependency ) => {
  const [counter, setCounter] = useState(time);
  const ref = useRef();

  useEffect( () => {
    setCounter(time)
    ref.current && clearInterval( ref.current );
    ref.current = setInterval( () => setCounter( counter => counter - 1 ), 1000 );
  }, [dependency] );

  return {
    counter
  }
}
