import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';
import Main from "../App";

test('Renders the BookingForm labels', () => {
    render(<BookingForm availableTimes={["5:00","5:30","6:00","6:30","7:00","7:30","8:00","8:30"]} 
    date="2026-05-01"
    time="6:00" guests= {2}
    occasion="occasion"/>);
    const dateElement = screen.getByText("Date");
    const timeElement = screen.getByText("Time");
    const guestsElement = screen.getByText("Number of guests");
    const occasionElement = screen.getByText("Occasion");
    expect(dateElement).toBeInTheDocument();
    expect(timeElement).toBeInTheDocument();
    expect(guestsElement).toBeInTheDocument();
    expect(occasionElement).toBeInTheDocument();
})