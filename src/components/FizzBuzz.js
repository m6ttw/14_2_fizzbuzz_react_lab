import React, {useState, useEffect} from "react";

const FizzBuzz = () => {

    const [number, setNumber] = useState(1);

    const [output, setOutput] = useState("");

    const [userAnswer, setUserAnswer] = useState("");

    useEffect(() => {
        console.log("use effect triggered")
            if (number % 3 === 0 && number % 5 === 0) {
                setOutput("fizzbuzz")
              } else if (number % 3 === 0) {
                setOutput("fizz")
              } else if (number % 5 === 0) {
                setOutput("buzz")
              } else {
                setOutput(number);
              }
        }
    )

    useEffect(() => {
        console.log("user input triggered")
            if (userAnswer == output) {
                console.log("correct")
            } else {
                console.log("wrong")
            }
    })

    const handleIncrease = () => {
        setNumber(number + 1);
    }
    const handleDecrease = () => {
        setNumber(number - 1);
    }

    const handleInput = (evt) => {
        setNumber(evt.target.value);
    }

    const handleAnswer = (evt) => {
        setUserAnswer(evt.target.value);
    }
    
    return(
        <>
            <h2>FizzBuzz</h2>
            <h4>Current Number: {number}</h4>
            <h5>Fizz / Buzz:</h5>
            <button onClick={handleIncrease}>Increase Number</button>
            <button onClick={handleDecrease}>Decrease Number</button>
            <input type="number" placeholder="Your number here" value={number} onChange={handleInput}></input>
            <input type="submit" onSubmit={handleInput}></input>
            <input type="string" placeholder="Fizz or buzz?" value={userAnswer} onChange={handleAnswer}></input>
        </>
    )
}

export default FizzBuzz;