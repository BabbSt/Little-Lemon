import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import BookingPage from './components/BookingPage';

test('Testing that initializeTimes returns a non-empty array',()=>{
  render(<BrowserRouter>
          <App/>
        </BrowserRouter>);
  const bookingLink = screen.getAllByText("Reservations");
  fireEvent.click(bookingLink[0]);
  /*There are 4 options for the event select, if the available times array is properly
    returned, there should be more than 4 options on the page*/
  expect(screen.getAllByRole('option').length).toBeGreaterThan(4);
})

test('Testing updateTime function returns a non empty array', () => {
  render(<BrowserRouter>
          <App/>
        </BrowserRouter>);
  const bookingLink = screen.getAllByText("Reservations");
  fireEvent.click(bookingLink[0]);
  const dateElement = screen.getByLabelText("Date");
  fireEvent.change(dateElement,{ target: { value: "2026-05-04"} });
  /*Similar logic to above, included a max value for the maximum number of times that could be
    returned by the api*/
  expect(screen.getAllByRole('option').length).toBeGreaterThan(4);
  expect(screen.getAllByRole('option').length).toBeLessThanOrEqual(18);
});
