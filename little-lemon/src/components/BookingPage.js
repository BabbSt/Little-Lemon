import { useState } from "react";
import BookingForm from "./BookingForm";

function BookingPage(props){
    let today = new Date();
    let todayString = today.getFullYear().toString()+"-"+(today.getMonth()+1).toString().padStart(2,'0')+"-"+today.getDate().toString().padStart(2,'0');
    const [date, setDate] = useState(todayString);
    const [time, setTime] = useState("6:00");
    const [guests, setGuests] = useState(2);
    const [occasion, setOccasion] = useState("occasion");
 return (
    <>
    <h1>Booking page</h1>
    <BookingForm 
    {...props}
    date={date}
    time={time}
    guests={guests}
    occasion={occasion}
    setDate={setDate}
    setTime={setTime}
    setGuests={setGuests}
    setOccasion={setOccasion}/>
    </>
 );
 
}

export default BookingPage;