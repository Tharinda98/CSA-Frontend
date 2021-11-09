import React from 'react';
import ReactDOM from 'react-dom';
import {render,screen} from '@testing-library/react';
import Card from '../../components/card';
import '@testing-library/jest-dom';


describe("Card component tests",()=>{
    it("It renders without crashing", ()=>{
        const div= document.createElement('div');
        ReactDOM.render(
            <Card
                title='New Messages'
           />,div

           
        )

        // const linkElement = screen.getByText(/New Messages/i);
        // expect(linkElement).toBeInTheDocument();
    });
    it("It display the title", ()=>{
        render(
            <Card
                title='New Messages'
           /> 
        );

        const linkElement = screen.getByText(/New Messages/i);
        expect(linkElement).toBeInTheDocument();
    });
})