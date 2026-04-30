/**Confirm Booking Component: Uses state set by form booking component to build out a conformation message
 *  for the user's reservation
 * Provides a button for user to navigate back to home page
 */
import '../css/ConfirmBooking.css';
import { useNavigate } from "react-router-dom";

function ConfirmBooking(props){
    const selectedDate = new Date(props.date + "T00:00-0800").toDateString();
    const navigate = useNavigate();
    return (
    <div id="confirmBooking" className="pageContent">
    <h1>Booking Confirmed</h1>
    <section></section>
    <p className="subTitle">{`${props.firstName}, see you soon!`}</p>
    <p>Your reservation for <strong>{props.guests} people</strong> has been booked on <strong>{selectedDate}</strong> at <strong>{props.time}</strong></p>
    <div id="buttonContainer">
    <button type='button' onClick={()=>{navigate("/")}}>Return to Home</button>
    </div>
    </div>
);
}

export default ConfirmBooking;