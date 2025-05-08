import { useEffect, useState } from "react";

// export default function Counter() {
//     const [number, setNumber] = useState(0);
  
//     const handleClick = () => {
//         setNumber((prev) => 
//         { const update = prev +1;
//             console.log(update);
            
//             return update;
//         }
//         ) 
//         console.log("Updated", number);
//     }
//     // fix this log here it should show the latest value);

//     useEffect(() => {
//         console.log(number);
//     }, [number]);
  
//     return (
//       <>
//         <h1>{number}</h1>
//         <button onClick={handleClick}>+1</button>
//       </>
//     );
//   }

export default  function StaleExample() {
    const [count, setCount] = useState(0);
  function incrementByOne() {
    setCount((count) => count +1);
  }

    return (
        <>
            <h1>{count}</h1>
            <button onClick={incrementByOne}>+1</button>
        </>
    )
    // const handleClick = () => {
    //   setTimeout(() => {
    //     setCount((prevCount) => {
    //         alert(`Count is: ${prevCount}`); // ❌ Stale value here
    //         return prevCount;
    //     })
    //     return count;
    //   }, 2000);
    // };
  
    // return (
    //   <>
    //     <h1>{count}</h1>
    //     <button onClick={() => setCount(count + 1)}>+1</button>
    //     <button onClick={()=>handleClick()}>Show Count After 2s</button>
    //   </>
    // );
  } 