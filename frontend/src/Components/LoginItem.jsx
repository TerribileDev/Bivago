import React from 'react';

const LoginItem = ({ Login, onDelete }) => {
  return (
    <tr>
      <td>{Login.nome}</td>
      <td>{Login.email}</td>
      <td>
        <button onClick={() => onDelete(Login.id)}>Excluir</button>
      </td>
    </tr>
  );
};

export default LoginItem;
