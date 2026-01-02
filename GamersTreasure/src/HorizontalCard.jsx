import "./HorizontalCard.css"

export default function HorizontalCard({card}) {
    return (
        <div className="horizontal-card">
            <div><h2>{card.heading}</h2>
            <p>{card.content}</p></div>
            <div><img src={card.url} alt="#" /></div>
        </div>
    )
}