import React from 'react';
import ReactDOM from 'react-dom';
import {render,screen} from '@testing-library/react';
import WorkBar from '../../../components/work/view/workBar';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';


describe("Work bar component tests",()=>{
    it("It renders without crashing", ()=>{
    render(
            <BrowserRouter>
                <WorkBar

                />
           </BrowserRouter>

           
        )
        // const linkElement = screen.getByText(/New Messages/i);
        // expect(linkElement).toBeInTheDocument();
    });
    
})