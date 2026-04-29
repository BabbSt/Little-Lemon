import { useState } from "react";

function BookingForm(props){

    const times = props.availableTimes.map((time)=>{
        return <option value={time}>{time}</option>
    })

    const [firstNameTouched, setFirstNameTouched] = useState(false);
    const [lastNameTouched, setLastNameTouched] = useState(false);

    function getIsFormValid() {
        return props.firstName && props.lastName && props.date && props.time && props.guests>=1 && props.guests<=10;
    };

    return(
        <form id="bookingForm" onSubmit={props.submitFunction}>
            <p id="firstNameInput">
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" name="firstName" value={props.firstName} onChange={(e) => props.setFirstName(e.target.value)} onFocus={()=> setFirstNameTouched(true)}  placeholder="First Name"/>
                {firstNameTouched && props.firstName.length < 1 ? <p className="errorMessage">*Required Field</p> : null}
            </p>
            <p id="lastNameInput">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" name="lastName" value={props.lastName} onChange={(e) => props.setLastName(e.target.value)} onFocus={()=> setLastNameTouched(true)} placeholder="Last Name"/>
                {lastNameTouched && props.lastName.length < 1 ? <p className="errorMessage">* Required Field</p> : null}
            </p>
            <p id="dateInput">
                <label htmlFor="date">Date</label>
                <input type="date" id="date" name="date" value={props.date} onChange={(e) => {
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
            <p id="guestInput">
                <label htmlFor="guests">Number of guests</label>
                <input type="number" id="guests" name="guests" min="1" max="10" value={props.guests} onChange={(e) => props.setGuests(e.target.value)}></input>
            </p>
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