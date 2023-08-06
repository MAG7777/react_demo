import { useContext } from "react";
import { MessageProvider } from "./Wrapper";

export default function Message() {

    const showAlert = useContext(MessageProvider);
    alert(showAlert)
    if(!showAlert) return null;

    return (
        <div className="alert alert-primary p-2 m-2">
            This text is really important

        </div>
    )
}