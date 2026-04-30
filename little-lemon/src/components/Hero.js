/**Hero Component: Introductory info for Little Lemon, contains main heading for the homepage
 * and a button that links to the table booking page*/
import '../css/Hero.css';
import platedFlight from '../images/Plated Flight.png';
import { useNavigate } from "react-router-dom";

function Hero(){
    const navigate = useNavigate();
    return(
        <section id="hero">
        <h1>Little Lemon <span className="subTitle">Chicago</span></h1>
        <p className="leadText">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <img src={platedFlight} alt='Plated flight of bread with various toppings including prosciutto, vegetables, and seeds'/>
        <button type='button' className='greenBkrd' onClick={()=>{navigate("/booking")}}>Reserve a Table</button>
        </section>
    )
}

export default Hero;