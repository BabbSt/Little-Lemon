import {Routes, Route, useNavigate } from "react-router-dom";
import { useReducer, useState } from "react";
import HomePage from "./HomePage";
import BookingPage from "./BookingPage";
import ConfirmBooking from "./ConfirmBooking";
import { fetchAPI, submitAPI } from "../ApiFunctions";

function Main(){
    const updateTime = (availableTimes, action)=>{
        //console.log(action.type);
        return fetchAPI(new Date(action.type));
    }

    function initializeTimes(){
        //return ["17:00","17:30","18:00","18:30","19:00","19:30","20:00","20:30"];
        return fetchAPI(new Date());
    }

    const [availableTimes, dispatch] = useReducer(updateTime, initializeTimes());
    const [firstName, setFirstName]=useState("");
    let today = new Date();
    let todayString = today.getFullYear().toString()+"-"+(today.getMonth()+1).toString().padStart(2,'0')+"-"+today.getDate().toString().padStart(2,'0');
    const [date, setDate] = useState(todayString);
    const [time, setTime] = useState(availableTimes[0]);
    const [guests, setGuests] = useState(2);
    
    const navigate = useNavigate();
    function submitForm(formData){
        if(submitAPI(formData)){
            navigate("/confirm-booking");
        }else{
            alert("Submission failed please try again");
        }
    }

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