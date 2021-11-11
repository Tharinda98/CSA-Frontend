import React from 'react';
import ReactDOM from 'react-dom';
import {render,screen} from '@testing-library/react';
import RatingBar from '../../../../components/rating/ratingSection/ratingBar';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';


describe("Rating Bar component tests",()=>{
    it("It renders without crashing", ()=>{
        render(
            <BrowserRouter>
                <RatingBar/>
           </BrowserRouter>
           
        )
        // const linkElement = screen.getByText(/New Messages/i);
        // expect(linkElement).toBeInTheDocument();
    });
    
})