import { useState, useEffect } from "react";

export default function Aula5() {
  const [usuario, setUsuario] = useState(null);
  const [users, setUsers] = useState([]);
  const [numero, setNumero] = useState("");

  async function PesquisarUser(e) {
    e.preventDefault();

    const resposta = await fetch(
      `https://jsonplaceholder.typicode.com/users/${numero}`,
    );

    const dados = await resposta.json();

    setUsuario(dados);
  }

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((dados) => setUsers(dados));
  }, []);

  return (
    <main className="w-full min-h-screen flex flex-col justify-center items-center gap-8">
      <form onSubmit={PesquisarUser} className="flex gap-2">
        <input
          type="number"
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
          placeholder="Digite o ID do usuário"
          className="border p-2 rounded"
        />

        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Pesquisar
        </button>
      </form>

      {usuario && (
        <div>
          <h2>{usuario.name}</h2>
          <p>{usuario.email}</p>
          <p>{usuario.phone}</p>
        </div>
      )}
    </main>
  );
}
