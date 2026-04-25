import Review from "./Review";
import saraPhoto from "../images/Sara.png";
import jonPhoto from "../images/Jon.png";
import samPhoto from "../images/Sam.png";
import lisaPhoto from "../images/Lisa.png";

function Testimonials(){
    return(
        <section>
            <h2>Testimonials</h2>
            <Review image={saraPhoto} name="Sara Lopez" username="Sara72" content="“Seriously cannot stop thinking about the Turkish Mac n' Cheese!!”"/>
            <Review image={jonPhoto} name="Jon Do" username="Johnny_Utah" content="“We had such a great time celebrating my grandmothers birthday!”"/>
            <Review image={samPhoto} name="Sam Smith" username="Latch64" content="“Best Feta Salad in town. Flawless every time!”"/>
            <Review image={lisaPhoto} name="Lisa Schwartz" username="Lisa_on_life" content="“Such a chilled out atmosphere - love it!”"/>
        </section>
    );
}

export default Testimonials;