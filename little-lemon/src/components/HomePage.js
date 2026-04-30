/**Home Page Component: Calls other components to build out sections that make up the home page
 * This is the page the site first opens to, with the path "/"
*/
import Hero from "./Hero";
import Specials from "./Specials";
import Testimonials from "./Testimonials";
import About from "./About";

function HomePage(){
    return(
        <>
            <Hero/>
            <Specials/>
            <Testimonials/>
            <About/>
        </>
    );
}

export default HomePage;