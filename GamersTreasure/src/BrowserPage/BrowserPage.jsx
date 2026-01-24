
import Header from "./Header";
import GameCard from "./GameCard";
import PopUp from "./PopUp";
import { useEffect, useState ,useCallback} from "react";

import "./BrowserPage.css";
import { data } from "react-router";

export default function BrowserPage() {
    const [isOpen, setIsOpen] = useState(false);
    const [game, setGame] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [getIndiGame, setGetIndiGame] = useState({});
    const [searchTerm, setSearchTerm] = useState('');
    const apiKey = import.meta.env.VITE_API_KEY;


    useEffect(() => {
        const getGames = async () => {
            try {
                const res = await fetch(`https://api.rawg.io/api/games?key=${apiKey}&page_size=50`);
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
     const searchEngine = useCallback(async()=>{
        fetch(`https://api.rawg.io/api/games?key=${apiKey}&platforms=4&search_precise=false&search_exact=true&search=${searchTerm}`)
        .then((res)=>{
            return res.json();
        })
        .then((res)=>{
            setGame(res.results);
        })
        .catch((e)=>{
            console.log(e);
        })
    },[searchTerm,game,setGame]);
    useEffect(()=>{
        searchEngine();
    },[searchTerm]);

    const handlePopupOpen = (id) => {
        const url = `https://api.rawg.io/api/games/${id}?key=${apiKey}`;
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
            <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
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