import logo from '../images/Logo\ no\ text.png'
import { Link } from "react-router-dom";

function Footer(){
    return (<footer>
    <img src={logo} alt='Little Lemon Logo'/>
    <nav>
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
    <section>
    <h3>Contact</h3>
    <ul>
        <li>123 S Main St Chicago, IL</li>
        <li>(123)-456-7890</li>
        <li>contact@littlelemon.com</li>
    </ul>
    </section>
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