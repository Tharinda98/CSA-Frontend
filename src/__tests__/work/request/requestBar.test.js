import React from 'react';
import ReactDOM from 'react-dom';
import {render,screen} from '@testing-library/react';
import RequestBar from '../../../components/work/request/requestBar';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';


describe("Request bar component tests",()=>{
    it("It renders without crashing", ()=>{
        render(
            <BrowserRouter>
                <RequestBar/>
           </BrowserRouter>
           
        )
        // const linkElement = screen.getByText(/New Messages/i);
        // expect(linkElement).toBeInTheDocument();
    });
    
})