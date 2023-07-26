import { Button } from "react-bootstrap";

export default function ShowMessage({toggle}) {
    return (
        <>
        <h5>THIS COMPONENT COTROLL MESSGE !!!</h5>
        <Button onClick={toggle}>SHOW MESSAGE</Button>
        </>

    )
}