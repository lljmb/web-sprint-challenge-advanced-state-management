import React from 'react';
import { screen, render } from '@testing-library/react';
import AddForm from './AddForm';
import userEvent from '@testing-library/user-event';

test('form header renders', () => {
    // arrange
    render(<AddForm/>);

    // act 
    const header = screen.getByText(/add smurf/i);

    // assert
    expect(header).toBeInTheDocument();
});

test('form successfully submits & renders', async () => {
    // arrange
    render(<AddForm/>);

    // act
    // grab user inputs
    const nameInput = screen.getByLabelText(/name/i);
    const nicknameInput = screen.getByLabelText(/nickname/i);
    const positionInput = screen.getByLabelText(/position/i);
    const descriptionInput = screen.getByLabelText(/description/i);
    
    // type into inputs
    userEvent.type(nameInput, 'gargomel');
    userEvent.type(nicknameInput, 'smelly melly');
    userEvent.type(positionInput, 'town terror');
    userEvent.type(descriptionInput, 'he stinks & bothers all the smurfs. what a pest!');
    
    // grab button & click submit
    const button = screen.getByRole('button');
    userEvent.click(button);
    
    // assert
    const successMessage = await screen.findByTestId(/errorAlert/i);
    expect(successMessage).toBeInTheDocument();
    
})