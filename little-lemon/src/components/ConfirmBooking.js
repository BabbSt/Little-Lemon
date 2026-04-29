function ConfirmBooking(props){
    const selectedDate = new Date(props.date + "T00:00-0800").toDateString();
    return (
    <>
    <h1>Booking Confirmed</h1>
    <p>{`Thanks ${props.firstName}! Your reservation for ${props.guests} people has been booked on ${selectedDate} at ${props.time}`}</p>
    </>
);
}

export default ConfirmBooking;