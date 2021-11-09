import React from 'react';
import ReactDOM from 'react-dom';
import {render,screen} from '@testing-library/react';

import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import ViewEdit from '../../../../components/rating/view/viewRating';


describe("View Edit component tests",()=>{
    it("It renders without crashing", ()=>{
        render(
            <BrowserRouter>
                <ViewEdit/>
           </BrowserRouter>
           
        )
        // const linkElement = screen.getByText(/New Messages/i);
        // expect(linkElement).toBeInTheDocument();
    });
    
})