import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';
import { BrowserRouter } from 'react-router-dom';
import BookingPage from '../components/BookingPage';

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

test("test form can't submit without input", ()=>{
  render(<BrowserRouter>
          <App/>
        </BrowserRouter>);
  const bookingLink = screen.getAllByText("Reservations");
  fireEvent.click(bookingLink[0]);

  const submitButton = screen.getByRole('button');
  expect(submitButton).toHaveAttribute('disabled');
})

test("test form can't submit without first name", ()=>{
  render(<BrowserRouter>
          <App/>
        </BrowserRouter>);
  const bookingLink = screen.getAllByText("Reservations");
  fireEvent.click(bookingLink[0]);

  const firstNameField = screen.getByLabelText('First Name');
  fireEvent.focus(firstNameField);
  expect(screen.getByText("Required Field")).toBeInTheDocument();

  const submitButton = screen.getByRole('button');
  expect(submitButton).toHaveAttribute('disabled');
})

test("test form can't submit without last name", ()=>{
  render(<BrowserRouter>
          <App/>
        </BrowserRouter>);
  const bookingLink = screen.getAllByText("Reservations");
  fireEvent.click(bookingLink[0]);

  const lastNameField = screen.getByLabelText('Last Name');
  fireEvent.focus(lastNameField);
  expect(screen.getByText("Required Field")).toBeInTheDocument();

  const submitButton = screen.getByRole('button');
  expect(submitButton).toHaveAttribute('disabled');
})

test("test form can submit without first and last name", ()=>{
  render(<BrowserRouter>
          <App/>
        </BrowserRouter>);
  const bookingLink = screen.getAllByText("Reservations");
  fireEvent.click(bookingLink[0]);

  const firstNameField = screen.getByLabelText('First Name');
  const lastNameField = screen.getByLabelText('Last Name');

  fireEvent.change(firstNameField,{target:{value : "john"}});
  fireEvent.change(lastNameField,{target:{value : "smith"}});

  const submitButton = screen.getByRole('button');
  expect(submitButton).not.toHaveAttribute('disabled');
})
