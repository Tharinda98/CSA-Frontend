import React from 'react';
import ReactDOM from 'react-dom';
import {render,screen} from '@testing-library/react'
import SearchBar from '../../components/searchBar'
import '@testing-library/jest-dom';
import { useState } from "react";
import { BrowserRouter } from 'react-router-dom';


describe("search bar component tests",()=>{
   
    it("It render without crashing", ()=>{
        
        render(
            <BrowserRouter>
                <SearchBar/>
            </BrowserRouter>
        );

    });
})