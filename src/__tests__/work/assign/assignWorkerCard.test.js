import React from 'react';
import ReactDOM from 'react-dom';
import {render,screen} from '@testing-library/react';
import AssignWorkerCard from '../../../components/work/assign/assignWorkerCard';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';


describe("Assign worker card component tests",()=>{
    it("It renders without crashing", ()=>{
        render(
            <BrowserRouter>
                <AssignWorkerCard/>
           </BrowserRouter>
           
        )
        // const linkElement = screen.getByText(/New Messages/i);
        // expect(linkElement).toBeInTheDocument();
    });
    
})