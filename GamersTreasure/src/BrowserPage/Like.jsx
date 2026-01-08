import { useState } from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './Like.css';
function Like() {
    const [liked, setLiked] = useState(false);
    let style = {
        color: "red"
    };
    function handleClick() {
        setLiked(!liked);
    }
    return (
        <p className="like-btn" onClick={handleClick}>{liked ? <FavoriteIcon style={style}/> : <FavoriteBorderIcon/>}</p>
    )

}
export default Like;