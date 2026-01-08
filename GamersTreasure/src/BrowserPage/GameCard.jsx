import Like from "./Like";
import './GameCard.css';
import { useState } from "react";
import {useGSAP} from "@gsap/react";
import { gsap } from "gsap";

export default function GameCard({ game ,opnePopUp}) {
    // const [isClicked, setIsClicked] = useState(false);
   
    return (
        <div className="game-card" onClick={opnePopUp}>
            <img src={game.image} alt={game.title} className="game-image" onClick={opnePopUp}/>
            <div className="game-content">
                <h3 className="game-title">{game.title}</h3>
                <p className="game-genre">{game.genre}</p>
                <Like />
            </div>
        </div>
    );
}