import { useState, useRef, useEffect } from "react"
import { Button } from "react-bootstrap";

export default function Hook() {
    let [count, setCount] = useState(0);

    useEffect(()=>{
        console.log('USE EFFECT arajin');
        return ()=>{
            console.log('INSIDE RETURN')
        }
    },[])

    // useEffect(()=>{
    //     console.log('USE EFFECT erkrord')
    // },[count])

    const handleDecrement = () => {
        setCount((prev)=>{
            return  prev -1
        });

        setCount((prev)=>{
            return  prev -1
        });

    }

    const handleIncrement = () => {
        setCount(prev=>prev+1);
        setCount(prev=>prev+1);
    }

    return (
        <div className="d-flex">
            <Button onClick={handleDecrement}>-</Button>
            <h6 className="p-2">{count}</h6>
            <Button onClick={handleIncrement}>+</Button>
        </div>
    )
}