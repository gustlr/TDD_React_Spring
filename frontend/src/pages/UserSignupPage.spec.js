import React from 'react';
import  {queryByPlaceholderText, render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import UserSingnupPage from './UserSignupPage';

describe('UserSignupPage', () => {
    
    describe('Layout', () => {
        
        it('has header of Sign Up', () => {

           const { container } = render(<UserSingnupPage/>);
           const header = container.querySelector('h1');
           expect(header).toHaveTextContent('Sign Up')
        })
        it('has input for display name', () => {
            const {queryByPlaceholderText} = render(<UserSingnupPage/>)
            const displayNameInput = queryByPlaceholderText('Your display name');
            expect(displayNameInput).toBeInTheDocument();
        })
        it('has input for  username', () => {
            const {queryByPlaceholderText} = render(<UserSingnupPage/>)
            const usernameInput = queryByPlaceholderText('Your username');
            expect(usernameInput).toBeInTheDocument();
        })
        it('has input for  password', () => {
            const {queryByPlaceholderText} = render(<UserSingnupPage/>)
            const passwordInput = queryByPlaceholderText('Your password');
            expect(passwordInput).toBeInTheDocument();
        })
        it('has password type for password ', () => {
            const {queryByPlaceholderText} = render(<UserSingnupPage/>)
            const passwordInput = queryByPlaceholderText('Your password');
            expect(passwordInput.type).toBe('password');
        })
        it('has input for repeat password', () => {
            const {queryByPlaceholderText} = render(<UserSingnupPage/>)
            const passwordRepeat = queryByPlaceholderText('Repeat your password');
            expect(passwordRepeat).toBeInTheDocument();
        })
        it('has repeat password type for password ', () => {
            const {queryByPlaceholderText} = render(<UserSingnupPage/>)
            const passwordInput = queryByPlaceholderText('Your password');
            expect(passwordInput.type).toBe('password');
        })
        it('has submit button', () => {
            const {container} = render(<UserSingnupPage/>);
            const submit = container.querySelector("button")
            expect(submit).toBeInTheDocument();
        })

    })
})