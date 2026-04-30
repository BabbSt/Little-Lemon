/*Footer Component: Builds out the footer component used at the bottom of all website pages*/
import logo from '../images/Logo no text.png'
import { Link } from "react-router-dom";

function Footer(){
    return (<footer>
    <img src={logo} alt='Little Lemon Logo'/>
    {/**Secondary navigation
     * aria label added based on https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/navigation_role#best_practices
    */}
    <nav aria-label="Main">
        <h3>Doormat Navigation</h3>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link>About</Link></li>
            <li><Link>Menu</Link></li>
            <li><Link to="/booking">Reservations</Link></li>
            <li><Link>Order Online</Link></li>
            <li><Link>Login</Link></li>
        </ul>
    </nav>
    {/**Little Lemon's contact information*/}
    <section>
    <h3>Contact</h3>
    <ul>
        <li>123 S Main St Chicago, IL</li>
        <li>(123)-456-7890</li>
        <li>contact@littlelemon.com</li>
    </ul>
    </section>
    {/**Little Lemon's social media pages*/}
    <section>
    <h3>Social Media Links</h3>
    <ul>
        <li><a>Instagram</a></li>
        <li><a>Facebook</a></li>
    </ul>
    </section>
    </footer>);
}

export default Footer;