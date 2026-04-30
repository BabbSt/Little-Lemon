/**Booking Form Component: Builds out form used to gather information required for booking a reservation
 * Updates state passed in through props based on user input
 * Navigates to Confirm Booking component once submitter
*/
import { useState } from "react";

function BookingForm(props){
    //Builds out available time options to list in select based on data retrieved from API in main component
    const times = props.availableTimes.map((time)=>{
        return <option key={time} value={time}>{time}</option>
    })

   //Get today's date to set minimum allowed value for the date picker (can't pick days in past)
   let today = new Date();
   let todayString = today.getFullYear().toString()+"-"+(today.getMonth()+1).toString().padStart(2,'0')+"-"+today.getDate().toString().padStart(2,'0');

   //State used to check if the user has interacted with required text fields before showing error
    const [firstNameTouched, setFirstNameTouched] = useState(false);
    const [lastNameTouched, setLastNameTouched] = useState(false);

    //Check that all required fields have a value and that number of guests is within allowed range
    //Used to set submit button as disabled or enabled
    function getIsFormValid() {
        return props.firstName && props.lastName && props.date && props.time && props.guests>=1 && props.guests<=10;
    };

    return(
        <form id="bookingForm" onSubmit={props.submitFunction}>
            <div id="firstNameInput">
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" name="firstName" value={props.firstName} onChange={(e) => props.setFirstName(e.target.value)} onFocus={()=> setFirstNameTouched(true)}  placeholder="First Name"/>
                {/**If the user has click the field but not entered any values, show message that field is required*/}
                {firstNameTouched && props.firstName.length < 1 ? <p className="errorMessage">*Required Field</p> : null}
            </div>
            <div id="lastNameInput">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" name="lastName" value={props.lastName} onChange={(e) => props.setLastName(e.target.value)} onFocus={()=> setLastNameTouched(true)} placeholder="Last Name"/>
                {/**If the user has click the field but not entered any values, show message that field is required*/}
                {lastNameTouched && props.lastName.length < 1 ? <p className="errorMessage">*Required Field</p> : null}
            </div>
            <p id="dateInput">
                <label htmlFor="date">Date</label>
                <input type="date" id="date" name="date" min={todayString} value={props.date} onChange={(e) => {
                props.setDate(e.target.value);
                props.timesDispatch({type: e.target.value});
                }}></input>
             </p>
             <p id="timeInput">
                <label htmlFor="time">Time</label>
                <select id="time" name="time" value={props.time} onChange={(e) => props.setTime(e.target.value)}>
                    {times}
                </select>
            </p>
            <div id="guestInput">
                <label htmlFor="guests">Number of guests</label>
                <input type="number" id="guests" name="guests" min="1" max="10" value={props.guests} onChange={(e) => props.setGuests(e.target.value)}></input>
                {/**If the user provides a value less than 1 or greater than 10 an error message is shown*/}
                {props.guests < 1 || props.guests>10 ? <p className="errorMessage">*Party size must be between 1 & 10 guests</p> : null}
            </div>
            <p id="occasionInput">
                <label htmlFor="occasion">Occasion (optional)</label>
                <select id="occasion" name="occasion" value={props.occasion} onChange={(e) => props.setOccasion(e.target.value)}>
                    <option value={"occasion"}>Select an occasion</option>
                    <option value={"Birthday"}>Birthday</option>
                    <option value={"Anniversary"}>Anniversary</option>
                    <option value={"Engagement"}>Engagement</option>
                </select>
            </p>
            <button type="submit" disabled={!getIsFormValid()}>Book Table</button>
        </form>
    );
}

export default BookingForm;