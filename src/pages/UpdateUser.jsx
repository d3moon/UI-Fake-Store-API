import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const UpdateUser = () => {
  const { userId } = useParams();
  const [userData, setUserData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/users/${userId}`)
      .then((res) => {
        setUserData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsError(true);
        setIsLoading(false);
      });
  }, [userId]);

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`https://fakestoreapi.com/users/${userId}`, userData)
      .then((res) => alert("Usuário Atualizado!"))
      .catch((err) => console.log(err));
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>An error occurred.</p>;
  

  return (
    <>
    <h1>Atualizar Usuário</h1>
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={userData.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Atualizar Usuário</button>
    </form>
    </>
  );
};

export default UpdateUser;
