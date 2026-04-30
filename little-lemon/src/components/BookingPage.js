/**Booking Page Componet: Builds out the page content for making a reservation
 * Starts by setting default values for state passed from main to ensure data is cleared
 *    each time the component is created
 * Holds state for last name and occasion
 * Passes all state to booking form component
*/
import { useState, useEffect } from "react";
import BookingForm from "./BookingForm";
import '../css/Booking.css';
import chefs from '../images/Mario and Adrian A.jpg';

function BookingPage(props){
   //Get's today's date and puts it in the format required for the date input type
   let today = new Date();
   let todayString = today.getFullYear().toString()+"-"+(today.getMonth()+1).toString().padStart(2,'0')+"-"+today.getDate().toString().padStart(2,'0');
   //Clears values on initial render
   useEffect(()=>{
      props.setFirstName("");
      props.setGuests(2);
      props.setDate(todayString);
      props.setTime(props.availableTimes[0]);
      //console.log(props.date);
   },[]);
   const [lastName, setLastName]=useState("");
   const [occasion, setOccasion] = useState("occasion");

   return (
      <div className="pageContent">
      <h1>Reserve a Table</h1>
      <div id="bookingPageContent">
      <BookingForm
      {...props}
      lastName={lastName}
      occasion={occasion}
      setLastName={setLastName}
      setOccasion={setOccasion}/>
      <img src={chefs} alt="Two chefs talking to each other"/>
      </div>
      </div>

   );

}

export default BookingPage;