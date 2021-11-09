import React from 'react';
import ReactDOM from 'react-dom';
import {render,screen} from '@testing-library/react';

import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import ViewNotifications from '../../../components/notification/notifications';


describe("notifications component tests",()=>{
    it("It renders without crashing", ()=>{
        render(
            <BrowserRouter>
                <ViewNotifications content={[]}/>
           </BrowserRouter>
           
        )
        // const linkElement = screen.getByText(/New Messages/i);
        // expect(linkElement).toBeInTheDocument();
    });
    
})