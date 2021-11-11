import React from 'react';
import ReactDOM from 'react-dom';
import {render,screen} from '@testing-library/react';

import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import Message from '../../../components/message/messages';


describe("Message component tests",()=>{
    it("It renders without crashing", ()=>{
        render(
            <BrowserRouter>
                <Message/>
           </BrowserRouter>
           
        )
        // const linkElement = screen.getByText(/New Messages/i);
        // expect(linkElement).toBeInTheDocument();
    });
    
})