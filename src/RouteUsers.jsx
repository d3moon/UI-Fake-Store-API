import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import CreateUser from "./pages/CreateUsers";
import GetUsers from "./pages/GetUsers";
import UpdateUser from "./pages/UpdateUser";
import DeleteUser from "./pages/DeleteUser";


const RouteUsers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<CreateUser />} path="/user/create" exact />
        <Route element={<GetUsers />} path="/user/list" exact />
        <Route element={<UpdateUser />} path="/user/update/:userId" exact />
        <Route element={<DeleteUser />} path="/user/delete/:userId" exact />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteUsers;
