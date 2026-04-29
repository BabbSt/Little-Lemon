import { useState, useEffect } from "react";
import BookingForm from "./BookingForm";

function BookingPage(props){
   const [lastName, setLastName]=useState("");
   let today = new Date();
   let todayString = today.getFullYear().toString()+"-"+(today.getMonth()+1).toString().padStart(2,'0')+"-"+today.getDate().toString().padStart(2,'0');
   //Clears values on initial render
   useEffect(()=>{
      props.setFirstName("");
      props.setGuests(2);
      props.setDate(todayString);
      props.setTime(props.availableTimes[0]);
      console.log(props.date);
   },[]);
   
   const [occasion, setOccasion] = useState("occasion");
 return (
    <>
    <h1>Booking page</h1>
    <BookingForm 
    {...props}
    lastName={lastName}
    occasion={occasion}
    setLastName={setLastName}
    setOccasion={setOccasion}/>
    </>
 );
 
}

export default BookingPage;