import "./GetStarted.css"
import useOnScreen from "./useOnScreen"
import { useRef } from "react"
import { Link } from "react-router";
export default function GetStarted() {
    const ref = useRef(null);
    const isVisible = useOnScreen(ref, "-100px");
    console.log(isVisible);
    return (
        <div className="get-started-container" ref = {ref} >
            <Link to = "/browser"><button className= {isVisible?"btn-animate":"btn-reverse-animate"}>Start Browsing!</button></Link>
        </div>
    )
}