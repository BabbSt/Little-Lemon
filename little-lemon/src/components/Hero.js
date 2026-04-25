import platedFlight from '../images/Plated Flight.png'

function Hero(){
    return(
        <section>
        <h1>Little Lemon <span className="subTitle">Chicago</span></h1>
        <p className="leadText">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <img src={platedFlight} alt='Plated flight of bread with various toppings including prosciutto, vegetables, and seeds'/>
        <button className='greenBkrd'>Reserve a Table</button>
        </section>
    )
}

export default Hero;