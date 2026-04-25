import logo from '../images/Logo\ no\ text.png'

function Footer(){
    return (<footer>
    <img src={logo} alt='Little Lemon Logo'/>
    <nav>
        <h3>Doormat Navigation</h3>
        <ul>
            <li><a>Home</a></li>
            <li><a>About</a></li>
            <li><a>Menu</a></li>
            <li><a>Reservations</a></li>
            <li><a>Order Online</a></li>
            <li><a>Login</a></li>
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