import { useState } from "react";
import Hook from "./HOOK";
import MemoHooks from "./MemoHook";
import { Button } from "react-bootstrap";

export default function MainHooks() {
    let [showCounter, setSHowCounter] = useState(false)
    return (
        <>
            <MemoHooks />
            {/* {
                showCounter && <Hook />
            }
            <h1>THIS IS A MAIN HOOKS WRAPPER</h1>
            <Button
                variant="success"
                onClick={() => {
                    setSHowCounter(showCounter => !showCounter)
                }}>
                Show counter
            </Button> */}
        </>
    )
}