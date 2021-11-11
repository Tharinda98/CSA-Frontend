import React from 'react';
import ReactDOM from 'react-dom';
import {render,screen} from '@testing-library/react'

import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import EmployeeCard from '../../components/employee/employeeCard';


describe("Employee card component tests",()=>{

    const content = {
        username:'username',
        left_date:'21/09/2021',
        contact_no:456789,
        email:'sample@gmail.com'
    }
   
    it("It render without crashing", ()=>{
        
        render(
            <BrowserRouter>
                <EmployeeCard type="Moderator" />
            </BrowserRouter>
        );

        // const linkElementUsername = screen.getByText(/username/i);
        // expect(linkElementUsername ).toBeInTheDocument();
    });
    it("It render contents without crashing", ()=>{
        
        render(
            <BrowserRouter>
                <EmployeeCard type="Moderator" content={content}/>
            </BrowserRouter>
        );

        const linkElementUsername = screen.getByText(/username/i);
        expect(linkElementUsername ).toBeInTheDocument();
    });
})