import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import CreateUser from "./pages/CreateUser";


const RouteUsers = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route element={<CreateUser/>} path="/user/create" exact />
        </Routes>
    </BrowserRouter>
  )
}

export default RouteUsers;