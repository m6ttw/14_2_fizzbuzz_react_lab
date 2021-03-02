import React, {useState, useEffect} from "react";

const FizzBuzz = () => {

    const [number, setNumber] = useState(1);

    const [output, setOutput] = useState("");

    const handleIncrease = () => {
        setNumber(number + 1)
    }
    const handleDecrease = () => {
        setNumber(number - 1)
    }
    
    return(
        <>
            <h2>FizzBuzz</h2>
            <h4>Current Number: {number}</h4>
            <h5>Fizz / Buzz: {output}</h5>
            <button onClick={handleIncrease}>Increase Number</button>
            <button onClick={handleDecrease}>Decrease Number</button>
        </>
    )
}

export default FizzBuzz;