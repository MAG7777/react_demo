import React, { createContext, useState } from "react";
import Message from "./Message";
import ShowMessage from "./ShowMessage";

export const MessageProvider = createContext();

export default function Wrapper() {
    let [showMessage, setShowMessage] = useState(false);
    const toggle = ()=>{
        alert()
        setShowMessage(showMessage=>!showMessage)};
    return (
        <MessageProvider.Provider value={showMessage}>
            <Message />
            <ShowMessage toggle={toggle}/>
        </MessageProvider.Provider>
    )
}