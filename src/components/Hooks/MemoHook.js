import { useState, useRef, useEffect, useMemo } from "react"
import { Button } from "react-bootstrap";

function complexCounting(number) {
    console.log('<<<=====complex function=====>>>>')

    let i = 0;
    while (i < 10000000000) i++;
    return number * 2;
}

export default function MemoHooks() {
    let [count, setCount] = useState(0);
    let [colored, setColored] = useState(false);

    const styles = {
        color: colored ? 'darkRed' : 'black'
    }

    useEffect(() => {
        console.log('USE EFFECT arajin');
    }, [])


    const handleDecrement = () => {
        setCount((prev) => {
            return prev - 1
        });


    }

    const handleIncrement = () => {
        setCount(prev => prev + 1);
    }


    let countResult =  useMemo(()=>{
        return complexCounting(count);
    }, [count])
    

    return (
        <div className="">
            <h1 style={styles}>Component make complex counting !!!</h1>
            <Button variant="warning" onClick={()=>{setColored(prev=>!prev)}}>Change color</Button>
            <div className="d-flex mt-2">
                <Button onClick={handleDecrement}>-</Button>
                <h6 className="p-2">{countResult}</h6>
                <Button onClick={handleIncrement}>+</Button>
            </div>

        </div>
    )
}