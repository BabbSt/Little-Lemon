import '../css/About.css';
import chefPhoto from '../images/Chef.png';
import interiorPhoto from '../images/Vibe.png';

function About(){
    return(
        <section id="about">
            <h2>Little Lemon <span className="subTitle">Chicago</span></h2>
            <p>Based in Chicago, Illinois, Little Lemon is a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. Our chefs draw inspiration from Italian, Greek, and Turkish culture and have a menu of 12-15 seasonally rotating items. Our rustic dining space offers a relaxed atmosphere perfect for a meal at any time of day.</p>
            <div className="images">
            <img className="bottom-img" src={interiorPhoto} alt='Relaxed patio seeting with large white umbrells over two person tables with padded leather armchairs'/>
            <img className="top-img" src={chefPhoto} alt='A chef sprinkling toppings on a tall salad'/>
            </div>
        </section>
    )
}

export default About;