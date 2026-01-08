
import "./App.css";
import HomePage from "./HomePage/HomePage";
import BrowserPage from "./BrowserPage/BrowserPage";
import { Routes, Route } from "react-router";
export default function App() {

    return (
        <>
            <Routes>
                <Route index element  = {<HomePage/>}/>
                <Route path="/browser" element = {<BrowserPage/>}/>
            </Routes>
        </>
    )
}
