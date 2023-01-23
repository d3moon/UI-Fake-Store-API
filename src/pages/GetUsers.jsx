import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const GetUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Listagem de Usuários</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name.firstname + " " + user.name.lastname}</td>
              <td>{user.email}</td>
              <Link to={`/user/update/${user.id}`}> Atualizar </Link>
              <Link to={`/user/delete/${user.id}`}> Deletar </Link>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GetUsers;
