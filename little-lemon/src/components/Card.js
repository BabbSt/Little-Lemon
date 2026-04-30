/**Card Component: Builds out the card for each weekly special*/
import scooterIcon from '../images/Scooter.svg';
import { Link } from "react-router-dom";

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
        <Link aria-label={`Order a delivery of ${props.title}`}>Order a delivery <img className="icon" aria-hidden="true" src={scooterIcon}/></Link>
        </div>
    </article>
    );
}

export default Card;