import '../css/Specials.css';
import Card from "./Card";
import saladPhoto from '../images/greek salad.jpg';
import bruchettaPhoto from '../images/bruchetta.svg';
import lemonPhoto from '../images/lemon dessert.jpg';

function Specials(){
    return(
    <section id="specials">
        <div className='specialsHeading'>
            <h2>This Week's Specials</h2>
            <button>Online Menu</button>
        </div>
        <div className="cardContainer">
        <Card title="Greek Salad" imgSource = {saladPhoto} price="$12.99" description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."/>
        <Card title="Bruchetta" imgSource = {bruchettaPhoto} price="$5.99" description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."/>
        <Card title="Lemon Dessert" imgSource = {lemonPhoto} price="$5.00" description="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."/>
        </div>
    </section>
    );
}

export default Specials;