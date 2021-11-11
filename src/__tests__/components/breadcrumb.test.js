import React from 'react';
import ReactDOM from 'react-dom';
import {render,screen} from '@testing-library/react'
import BreadCrumb from '../../components/breadcrumb'
import '@testing-library/jest-dom';
import { useState } from "react";
import { BrowserRouter } from 'react-router-dom';


describe("breadcrumb component tests",()=>{
   
    it("It render without crashing", ()=>{
        
        render(
            <BrowserRouter>
                <BreadCrumb type="Type" reason="Add" />
            </BrowserRouter>
        );

    });

    it("It content present in the components", ()=>{
        
        render(
            <BrowserRouter>
                <BreadCrumb type="Type" reason="Add" />
            </BrowserRouter>
        );

    });
})