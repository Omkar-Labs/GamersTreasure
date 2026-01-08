import "./PopUp.css";
import React, { useRef, useLayoutEffect, use } from "react";
import { gsap } from "gsap";
import { motion } from "motion/react";
export default function PopUp({ game, closePopUp }) {
    const boxRef = useRef(null);
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {

            gsap.fromTo(boxRef.current, { scale: 0.5, opacity: 0, y: 50 }, { scale: 1, opacity: 1, y: 0, duration: 0.5, ease: "power2.out(1.7)" });
        });
        return () => ctx.revert();
    }, []);
    const handleExit = () => {
        gsap.context(() => {
            gsap.to(boxRef.current, { scale: 0.5, opacity: 0, y: 50, duration: 0.5, ease: "power2.in(1.7)", onComplete: closePopUp });
        });
    }
    return (
        <div  className="popup-overlay" onClick={handleExit} ref={boxRef}>
            <div className="popup-left">
                <div className="popup-game">
                    <img src={game.image} alt={game.title} className="popup-game-image" />
                    <div className="game-features">
                        <h2 className="popup-game-title">{game.title}</h2>
                        <p className="popup-game-genre">{game.genre}</p>
                        <h3>Features:</h3>
                        <ul>
                            {game.features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                    </div>

                </div>
                <div className="popup-content">
                    <h2>Summary Of Game</h2>
                    <p>{game.summary}</p>
                </div>
            </div>
            <div className="popup-right">
                <h2>System Requirements</h2>
                <ul>
                    <ul>
                        {game.systemRequirement.map((req, index) => (
                            <li key={index}>{req}</li>
                        ))}
                    </ul>
                </ul>
            </div>
        </div>
    );
}