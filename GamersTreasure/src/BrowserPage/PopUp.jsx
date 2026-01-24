import "./PopUp.css";
import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
export default function PopUp({ game, closePopUp }) {
    const boxRef = useRef(null);
    const arr = [...game.title];
    console.log(arr);
    console.log(arr.length);
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {

            gsap.fromTo(boxRef.current, { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: "power2.out(1.7)" });
        });
        return () => ctx.revert();
    }, []);
    const handleExit = () => {
        gsap.context(() => {
            gsap.to(boxRef.current, { scale: 0.5, opacity: 0, duration: 0.5, ease: "power2.in(1.7)", onComplete: closePopUp });
        });
    }
    const feature = game.features.slice(0,14);
    const genres = game.genre.map((ent) => {
        return ent.name;
    });
    const platform = game.platforms.filter((ent) => (ent.platform.name == "PC"));
    return (
        <div key={game.id}className="popup-overlay" onClick={handleExit} ref={boxRef} style={{
            position: 'fixed',
            top: "50%",
            left: "50%",
            transform: "translate(-50% , -50%)"
        }}>
            <div className="popup-left">
                <div className="popup-game">
                    <img src={game.image} alt={game.title} className="popup-game-image" />
                    <div className="game-features">
                        <h2 className="popup-game-title" style={arr.length >=20?{fontSize:"3.5ch"}:{fontSize:"2.7rem"}}>{game.title}</h2>
                        <div style = {{display:"flex",alignContent:"center",justifyContent:"flex-start",flexWrap:"wrap",gap:5}}>{genres.map((ent, index) => (<p className="popup-game-genre" key={index}>{ent}</p>))}</div>
                        <h3>Features:</h3>

                        <div style ={{display:"flex",alignContent:"center",justifyContent:"flex-start",flexWrap:"wrap",gap:5,overflow:"",width:490}}>{feature.map((feature, index) => (
                            <p key={index}>{feature.name}, </p>
                        ))}</div>

                    </div>

                </div>
                <div className="popup-content">
                    <h2>Description Of Game</h2>
                    <p>{game.summary}</p>
                </div>
            </div>
            <div className="popup-right">
                <h2>System Requirements</h2>
                <p>{platform[0].requirements.recommended}</p>
            </div>
        </div>
    );
}