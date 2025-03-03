import React from 'react'
import Dashborad from "../../Pages/Dashboard";
import Inventory from "../../Pages/Inventory";
import Orders from "../../Pages/Orders";
import Customers from "../../Pages/Customers";
import { Routes, Route } from 'react-router-dom';

const AppRoutes = () => {
  
  return (
  
   <Routes>
    <Route>
      <Route path="/" element={<Dashborad />} />
      <Route path="/inventory" element={<Inventory />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/customers" element={<Customers />} />
    </Route>
   </Routes>
   
  )
}

export default AppRoutes;
