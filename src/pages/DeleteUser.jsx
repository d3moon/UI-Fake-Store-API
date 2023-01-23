import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const DeleteUser = () => {
  const { userId } = useParams();
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState(null);

  const handleDelete = () => {
    setIsDeleting(true);
    setError(null);
    axios
      .delete(`https://fakestoreapi.com/users/${userId}`)
      .then((res) => {
        if (res.status === 200) {
          alert("Usuário deletado com sucesso!");
        }
      })
      .catch((err) => {
        setError(err);
        console.log(err);
      })
      .finally(() => {
        setIsDeleting(false);
      });
  };

  return (
    <div>
      <h1>Deletar Usuário</h1>
      {isDeleting ? (
        <p>Deletando...</p>
      ) : (
        <button onClick={handleDelete}>Deletar Usuário</button>
      )}
      {error && <p>{error.message}</p>}
    </div>
  );
};

export default DeleteUser;
