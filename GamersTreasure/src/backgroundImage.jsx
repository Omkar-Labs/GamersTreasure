import "./backgroundImage.css"
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(useGSAP,ScrollTrigger);

export default function BackgroundImage() {
    const img = useRef(null);

    useGSAP(() => {
        gsap.to(img.current, {
            backgroundColor: "#facc15",
            scale: 1.2,
            filter: "blur(10px)",
            scrollTrigger: {
                trigger: document.body,
                start: "top top",
                end: "bottom bottom",
                toggleActions: "play reverse play reverse",
                scrub: true,
            }
    })});
    return (

        <div className="background-image" ref={img} >
            <h1 className="title-text">
                Gamers Treasure
            </h1>
        </div>

    )
}