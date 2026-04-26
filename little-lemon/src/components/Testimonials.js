import '../css/Testimonials.css';
import Review from "./Review";
import saraPhoto from "../images/Sara.png";
import jonPhoto from "../images/Jon.png";
import samPhoto from "../images/Sam.png";
import lisaPhoto from "../images/Lisa.png";

function Testimonials(){
    return(
        <section id="testimonials">
            <h2>Testimonials</h2>
            <div id="reviewContainer">
            <Review image={saraPhoto} name="Sara Lopez" username="Sara72" content="“Seriously cannot stop thinking about the Turkish Mac n' Cheese!!”"/>
            <Review image={jonPhoto} name="Jon Do" username="Johnny_Utah" content="“We had such a great time celebrating my grandmothers birthday!”"/>
            <Review image={samPhoto} name="Sam Smith" username="Latch64" content="“Best Feta Salad in town. Flawless every time!”"/>
            <Review image={lisaPhoto} name="Lisa Slone" username="Lisa_on_life" content="“Such a chilled out atmosphere - love it!”"/>
            </div>
        </section>
    );
}

export default Testimonials;