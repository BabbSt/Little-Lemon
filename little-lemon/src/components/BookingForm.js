function BookingForm(props){

    const times = props.availableTimes.map((time)=>{
        return <option value={time}>{time}</option>
    })

    return(
        <form>
            <label htmlFor="date">Date</label>
            <input type="date" id="date" name="date" value={props.date} onChange={(e) => {
               props.setDate(e.target.value);
             }}></input>
            {/*Do weird state stuff with time*/}
            <label htmlFor="time">Time</label>
            <select id="time" name="time" value={props.time} onChange={(e) => props.setTime(e.target.value)}>
                {times}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" id="guests" name="guests" min="1" max="10" value={props.guests} onChange={(e) => props.setGuests(e.target.value)}></input>
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" name="occasion" value={props.occasion} onChange={(e) => props.setOccasion(e.target.value)}>
                <option value={"occasion"}>Select an occasion</option>
                <option value={"Birthday"}>Birthday</option>
                <option value={"Anniversary"}>Anniversary</option>
                <option value={"Engagement"}>Engagement</option>
            </select>
            <button type="submit">Book Table</button>
        </form>
    );
}

export default BookingForm;