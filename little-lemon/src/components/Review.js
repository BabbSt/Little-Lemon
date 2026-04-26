import star from '../images/star.png';

function Review(props){
    return(
        <article class="review">
            <img aria-hidden="true" className="avatar" src={props.image} alt=""/>
            <div className='userInfo'>
                <h3>{props.name}</h3>
                <p className="highlight">{props.username}</p>
            </div>
            <div className='starRating'>
                <img className="star" src={star} alt='filled star'/>
                <img className="star" src={star} alt='filled star'/>
                <img className="star" src={star} alt='filled star'/>
                <img className="star" src={star} alt='filled star'/>
                <img className="star" src={star} alt='filled star'/>
            </div>
            <p className='reviewContent'>{props.content}</p>
        </article>
    );
}

export default Review;