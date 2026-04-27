import { useState } from "react";
import BookingForm from "./BookingForm";

function BookingPage(){
    const [date, setDate] = useState("2026-05-01");
    const [time, setTime] = useState("6:00");
    const [guests, setGuests] = useState(2);
    const [occasion, setOccasion] = useState("occasion");
    const [availableTimes, setAvailableTimes] = useState(["5:00","5:30","6:00","6:30","7:00","7:30","8:00","8:30"]);
 return (
    <>
    <h2>Booking page</h2>
    <BookingForm date={date}
    time={time}
    guests={guests}
    occasion={occasion}
    availableTimes={availableTimes}
    setDate={setDate}
    setTime={setTime}
    setGuests={setGuests}
    setOccasion={setOccasion}/>
    </>
 );
 
}

export default BookingPage;