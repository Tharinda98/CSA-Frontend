import React from 'react';
import ReactDOM from 'react-dom';
import {render,screen} from '@testing-library/react';
import SummaryChart from '../../components/pieChart';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';


describe("Summary Chart component tests",()=>{
    it("It renders without crashing", ()=>{
       
            const div= document.createElement('div');
        
            ReactDOM.render(
                <SummaryChart
                    value={[2,3,1]}
            />,div
           
        )            

        // const linkElement = screen.getByText(/New Messages/i);
        // expect(linkElement).toBeInTheDocument();
    });
    
})