
import Header from "./Header";
import GameCard from "./GameCard";
import PopUp from "./PopUp";
import { use, useEffect, useState } from "react";
import {useGSAP} from "@gsap/react";
import { gsap } from "gsap";
import "./BrowserPage.css";
export default function BrowserPage() {
    const [isOpen, setIsOpen] = useState(false);
   
    const handlePopupOpen = () => {
        setIsOpen(true);
         
    }
    const handlePopupClose = () => {
        setTimeout(() => {
            setIsOpen(false);
        }, 1000);
    }
    const game = {
        image: "https://upload.wikimedia.org/wikipedia/en/f/f1/TombRaider2013.jpg",
        title: "Tomb Raider",
        genre: "Action RPG"
    };
    return (
        <div className="browser-page">
            <Header />
            {isOpen && <PopUp  game={{
                image: "https://upload.wikimedia.org/wikipedia/en/f/f1/TombRaider2013.jpg",
                title: "Tomb Raider",
                genre: "Action RPG",
                summary: "Tomb Raider is an action-adventure video game developed by Crystal Dynamics and published by Square Enix. It is a reboot of the Tomb Raider franchise, focusing on the origin story of the protagonist, Lara Croft. The game follows Lara as she embarks on a perilous journey to survive on a mysterious island filled with dangerous wildlife, hostile inhabitants, and ancient secrets. Players must navigate through challenging environments, solve puzzles, and engage in combat to uncover the island's mysteries and rescue her friends.",
                features: ["Single-player campaign", "Exploration and puzzle-solving", "Combat against enemies", "Character progression and skill upgrades"],
                systemRequirement: ["OS: Windows 7 64-bit", "Processor: Intel Core i3-2100 or AMD equivalent", "Memory: 4 GB RAM", "Graphics: NVIDIA GeForce GTX 650 or AMD Radeon HD 7770", "DirectX: Version 11", "Storage: 25 GB available space"]
            }} closePopUp={handlePopupClose} />}
            <GameCard game={game} opnePopUp={handlePopupOpen} />
        </div>
    );
}