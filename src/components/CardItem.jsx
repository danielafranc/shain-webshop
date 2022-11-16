export const CardItem = ({text, img, price}) => {
    return (
        <div className="card">
            <img src={img} alt={text} />
            <p> {text} </p>

        </div>
    )
} 
export default CardItem;