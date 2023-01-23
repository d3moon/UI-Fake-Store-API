import React from 'react';
import { useState } from 'react';
import axios from 'axios';

function CreateUser() {
const [newUser, setNewUser] = useState({ name: '', email: '' });


async function handleCreateUser(e) {
  e.preventDefault();
  try {
    await axios.post('https://fakestoreapi.com/users', newUser);
    setNewUser({ name: '', email: '' });
    alert("Usuário criado com sucesso!");
  } catch (error) {
    console.error(error);
  }
}


  return (
    <>
    <h1>Cadastro de Usuários</h1>
    <form onSubmit={handleCreateUser}>
      <label>
        Nome:
        <input
          type="text"
          value={newUser.name}
          onChange={e => setNewUser({ ...newUser, name: e.target.value })}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={newUser.email}
          onChange={e => setNewUser({ ...newUser, email: e.target.value })}
        />
      </label>
      <button type="submit">Criar usuário</button>
    </form>
    </>
    );
}

export default CreateUser;
