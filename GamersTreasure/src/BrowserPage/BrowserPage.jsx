
import Header from "./Header";
import GameCard from "./GameCard";
import PopUp from "./PopUp";
import { useEffect, useState } from "react";

import "./BrowserPage.css";

export default function BrowserPage() {
    const [isOpen, setIsOpen] = useState(false);
    const [game, setGame] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [getIndiGame, setGetIndiGame] = useState({});


    useEffect(() => {
        const getGames = async () => {
            try {
                const res = await fetch("https://api.rawg.io/api/games?key=Your_API_Key&offset=0&limit=4");
                const data = await res.json();
                setGame(data.results);     // <-- return the results
            } catch (err) {
                console.log(err);
            } finally {
                setIsLoading(false);
            }
        };
        getGames()

    }, []);

    const handlePopupOpen = (id) => {
        const url = `https://api.rawg.io/api/games/${id}?key=Your_API_Key`;
        const getIndiGames = async () => {
            try {
                const res = await fetch(url);
                const data = await res.json();
                setGetIndiGame(data);    // <-- return the results
            } catch (err) {
                console.log(err);
            }
        };
        getIndiGames()
            .then(() => {
                setIsOpen(true);
            })
    }
    const handlePopupClose = () => {

        setIsOpen(false);

    }

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <div className="browser-page">
            <Header />
            {isOpen && <PopUp game={{
                image: getIndiGame.background_image,
                title: getIndiGame.name,
                genre: getIndiGame.genres,
                summary: getIndiGame.description_raw,
                features: getIndiGame.tags,
                platforms: getIndiGame.platforms,
                id:getIndiGame.id
            }} closePopUp={handlePopupClose} />}
            <div style={{ display: "flex", justifyContent: "flex-start", alignContent: "center", flexWrap: "wrap", padding: 10, gap: 20 }}>
                {game.map((game,index) => (<GameCard game={{ title: game.name, image: game.background_image, genre: game.genres, id: game.id }} openPopUp={handlePopupOpen} key={index}/>))}
            </div>
        </div>
    );
}