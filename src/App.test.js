import { render, screen, fireEvent, act } from '@testing-library/react';

import App from './App';
import { Provider } from 'react-redux'
import { BrowserRouter, useNavigate} from "react-router-dom" 

import RegForm from './components/Form/RegForm';

import store from './redux/store';
test('renders Register title', () => {
  render( <BrowserRouter>
  <Provider store={store}><App/></Provider>
  </BrowserRouter> );

  // check that the form is being rendered
  const form = screen.queryByTestId('register-form');
  expect(form).toBeInTheDocument()

  
  const reqAcc = screen.getByText(/Admin Dashboard/i);
  expect(reqAcc).toBeInTheDocument();
});

test('Renders Submit Button', () => {
  render( <BrowserRouter>
  <Provider store={store}><App/></Provider>
  </BrowserRouter> );
  // check that the form is being rendered
  const form = screen.queryByTestId('register-form');
  expect(form).toBeInTheDocument()

  const buttonElement = screen.getByText(/SUBMIT/i);

  // Assert that the button is rendered
  expect(buttonElement).toBeInTheDocument();
});

test('Form is working correctly', async () => {
  // Render the TextInput component
  render( <BrowserRouter>
    <Provider store={store}><App/></Provider>
    </BrowserRouter> );

  // check that the form is being rendered
  const form = screen.queryByTestId('register-form');
  expect(form).toBeInTheDocument()

  // Find the input element
  const inputName = screen.getByLabelText('Name');
  const inputSurname = screen.getByLabelText('Surname');
  const inputUsername = screen.getByLabelText('Username');
  const inputEmail = screen.getByLabelText('Email Address');
  const inputPw = screen.getByLabelText('Password');

  // Simulate a filling form
  const test_data = {
    name: 'name',
    surname: 'surname',
    username: 'username',
    email: 'email@mymail.com',
    pw: 'mypwpwpw'
  }

  fireEvent.change(inputName, { target: { value: test_data.name } });
  fireEvent.change(inputSurname, { target: { value: test_data.surname } });
  fireEvent.change(inputUsername, { target: { value: test_data.username } });
  fireEvent.change(inputEmail, { target: { value: test_data.email } });
  fireEvent.change(inputPw, { target: { value: test_data.pw} });

  // Assert that the input's value has been updated
  expect(inputName.value).toBe(test_data.name);
  expect(inputSurname.value).toBe(test_data.surname);
  expect(inputUsername.value).toBe(test_data.username);
  expect(inputEmail.value).toBe(test_data.email);
  expect(inputPw.value).toBe(test_data.pw);

  // find submit button
  const buttonElement = screen.getByText(/SUBMIT/i);

  // Assert that the button is rendered
  expect(buttonElement).toBeInTheDocument();
  
  // simulate submit
  fireEvent.submit(buttonElement);
  



  // check that the URL is being updated
  await new Promise((resolve) => setTimeout(resolve, 3000))
  expect(window.location.pathname).toBe('/');



});

