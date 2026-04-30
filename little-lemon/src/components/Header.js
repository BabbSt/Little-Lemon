/**Header component: Contains the company logo displayed at the top of the page */
import logo from '../images/Logo.svg'

function Header(){
    return (
    <header>
        <img src={logo} alt="Little Lemon Logo"/>
    </header>
    );
}

export default Header;