import Like from "./Like";
import './GameCard.css';


export default function GameCard({ game, openPopUp }) {
    const id = game.id;
    const genres = game.genre.map((ent) => {
        return ent.name;
    });
    return (
        <div className="game-card" onClick={()=>openPopUp(id)} key={game.id}>
            <img src={game.image} alt={game.title} className="game-image" onClick={()=>openPopUp(id)} />
            <div className="game-content">
                <h3 className="game-title">{game.title}</h3>
                {genres.map((ent,index) => (<p className="game-genre" key={index}>{ent}</p>))}
                <Like />
            </div>
        </div>
    );
}