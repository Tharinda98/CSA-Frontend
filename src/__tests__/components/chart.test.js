import React from 'react';
import ReactDOM from 'react-dom';
import Chart from '../../components/chart'


describe("Chart component tests",()=>{

    const sampleXArray = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri','Sat','Sun']
    const sampleYArray = [4,6,7,8,9]
    const request = 'On Going work'

    it("It renders without crashing", ()=>{
        const div= document.createElement('div');
        
        ReactDOM.render(
            <Chart 
            ArrayX = {sampleXArray}
            Request = {request}
            ArrayY = {sampleYArray}
        />,div

           
        )

        console.log()

        // const linkElement = screen.getByText(/New Messages/i);
        // expect(linkElement).toBeInTheDocument();
    });
   
})