import React from "react";
import { Routes } from "react-router";
import { Route } from 'react-router';
import { BrowserRouter } from "react-router-dom";
import { Product } from "../components/Products/product";
export const Router = () => {
    return  <BrowserRouter><Routes>

    <Route path="/products" element={<Product/>}>  </Route> 


</Routes> 
</BrowserRouter>
}