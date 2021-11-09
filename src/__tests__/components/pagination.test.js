import React from 'react';
import ReactDOM from 'react-dom';
import {render,screen} from '@testing-library/react';
import PaginationBar from '../../components/pagination';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';


describe("pagination component tests",()=>{
    it("It renders without crashing", ()=>{
        render(
            <PaginationBar/>
           
        )
        // const linkElement = screen.getByText(/New Messages/i);
        // expect(linkElement).toBeInTheDocument();
    });
    
})