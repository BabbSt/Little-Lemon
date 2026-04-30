/**Main component: renders content for homepage, booking form, and confirm booking page
 * Creates list of available times from API and maintains the state of this list
 * Holds state for first name, date, time, and number of guests so the infromation can be used
 *  across components
 */

import {Routes, Route, useNavigate } from "react-router-dom";
import { useReducer, useState } from "react";
import HomePage from "./HomePage";
import BookingPage from "./BookingPage";
import ConfirmBooking from "./ConfirmBooking";
import { fetchAPI, submitAPI } from "../ApiFunctions";

function Main(){
    //Calls API to update available times based on selected date, is called when date fiels changes
    const updateTime = (availableTimes, action)=>{
        //console.log(action.type);
        return fetchAPI(new Date(action.type));
    }

    function initializeTimes(){
        return fetchAPI(new Date());
    }

    //Initializing state
    const [availableTimes, dispatch] = useReducer(updateTime, initializeTimes());
    const [firstName, setFirstName]=useState("");
    let today = new Date();
    let todayString = today.getFullYear().toString()+"-"+(today.getMonth()+1).toString().padStart(2,'0')+"-"+today.getDate().toString().padStart(2,'0');
    const [date, setDate] = useState(todayString);
    const [time, setTime] = useState(availableTimes[0]);
    const [guests, setGuests] = useState(2);
    
    //Navigation for once form is submitted
    const navigate = useNavigate();
    function submitForm(formData){
        if(submitAPI(formData)){
            navigate("/confirm-booking");
        }else{
            alert("Submission failed please try again");
        }
    }

    //Returns components for different pages based on react router route
    return (
    <main>
        <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/booking" element={<BookingPage
            availableTimes={availableTimes}
            timesDispatch={dispatch}
            firstName={firstName}
            date={date}
            time={time}
            guests={guests}
            setFirstName={setFirstName}
            setDate={setDate}
            setTime={setTime}
            setGuests={setGuests}
            submitFunction={submitForm}/>}></Route>
            <Route path="/confirm-booking" element={<ConfirmBooking
            firstName={firstName}
            date={date}
            time={time}
            guests={guests}/>}></Route>
        </Routes>
    </main>);
}

export default Main;