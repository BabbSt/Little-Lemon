import scooterIcon from '../images/Scooter.svg';

function Card(props){
    return (
    <article className="card">
        <img src={props.imgSource} alt={`${props.title} dish`}/>
        <h3>{props.title}</h3>
        <p className="highlight">{props.price}</p>
        <p>{props.description}</p>
        <a>Order a delivery <img aria-hidden="true" src={scooterIcon}/></a>
    </article>
    );
}

export default Card;