import React from 'react';
import ReactDOM from 'react-dom';
import {render,screen} from '@testing-library/react';
import NotificationBar from '../../../components/notification/notificationBar';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';


describe("notification bar component tests",()=>{
    it("It renders without crashing", ()=>{
        render(
            <BrowserRouter>
                <NotificationBar/>
           </BrowserRouter>
           
        )
        // const linkElement = screen.getByText(/New Messages/i);
        // expect(linkElement).toBeInTheDocument();
    });
    
})