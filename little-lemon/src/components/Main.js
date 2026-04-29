import {Routes, Route, useNavigate } from "react-router-dom";
import { useReducer } from "react";
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
            <Route path="/booking" element={<BookingPage availableTimes={availableTimes} timesDispatch={dispatch} submitFunction={submitForm}/>}></Route>
            <Route path="/confirm-booking" element={<ConfirmBooking/>}></Route>
        </Routes>
    </main>);
}

export default Main;