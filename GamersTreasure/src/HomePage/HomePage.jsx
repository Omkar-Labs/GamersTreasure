import HorizontalCard from "./HorizontalCard.jsx";
import BackgroundImage from "./backgroundImage.jsx";
import GetStarted from "./GetStarted.jsx";

export default function HomePage() {

    const cardsData = [{
        heading: "Game Of The Year - 2025",
        content: "Clair Obscur: Expedition 33 is a story‑driven turn‑based RPG with real‑time dodges and parries, where you lead a team from the city of Lumière on a desperate mission to destroy the Paintress, an artist whose cursed paintings erase people from existence each year.",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ-OcnTTYcz5TgtLbOQvwem9O0svdzLw6r2A&s",
    }, {
        heading: "Best Indie Game - 2025",
        content: "Hollow Knight: Silksong is an upcoming action-adventure game developed and published by Team Cherry. It is a sequel to the critically acclaimed Hollow Knight and follows the story of Hornet, a character from the original game, as she explores a new kingdom filled with new enemies, allies, and challenges.",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1nJsR9Wks7LJwvi_kUOr6IFki09BvEQGe5g&s",
    }, {
        heading: "Best Narrative - 2025",
        content: "Pentiment is a narrative adventure game developed by Obsidian Entertainment and published by Xbox Game Studios. Set in 16th-century Bavaria, the game follows Andreas Maler, an artist who becomes embroiled in a series of murders and political intrigue in a small town.",
        url: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/11/Pentiment-Historically-Grounded-Diversity.jpg?w=1600&h=900&fit=crop",
    }, {
        heading: "Best Art Direction - 2025",
        content: "Tunic is an action-adventure game developed by Andrew Shouldice and published by Finji. The game features a small fox protagonist who explores a mysterious island filled with secrets, puzzles, and challenging enemies, all presented in a charming isometric art style.",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCszjjPHA33yCL-RYvikZHeBBs9fW8jPqIXQ&s",
    }];
    return (
        <>
            <BackgroundImage />
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "100vh",
                minHeight: "100vh",
                gap: "3rem"
            }}>
                <HorizontalCard card={cardsData[0]} />
                <HorizontalCard card={cardsData[1]} reverse={true} />
                <HorizontalCard card={cardsData[2]} />
                <HorizontalCard card={cardsData[3]} reverse={true} />
                <GetStarted />
            </div>
        </>
    )

}