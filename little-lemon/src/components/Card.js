import scooterIcon from '../images/Scooter.svg';

function Card(props){
    return (
    <article className="card">
        <img src={props.imgSource} alt={`${props.title} dish`}/>
        <div className="cardText">
        <div className='cardHeading'>
        <h3>{props.title}</h3>
        <p className="highlight">{props.price}</p>
        </div>
        <p>{props.description}</p>
        <a>Order a delivery <img className="icon" aria-hidden="true" src={scooterIcon}/></a>
        </div>
    </article>
    );
}

export default Card;