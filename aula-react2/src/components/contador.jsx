import { useState } from "react";

export function Contador() {
  const [contador, setContador] = useState(0);
  const [nome, setNome] = useState("");
  return (
    <div className="text-center">
      <h1 className="text-blue-700 text-4xl p-4">{contador}</h1>

      <input
        className="rounded border p-2"
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Digite seu nome"
      />
      <button
        className="bg-amber-600 p-4 m-4 rounded-3xl text-white"
        onClick={() => setContador(contador + 1)}
      >
        eguas macho
      </button>

      <h1>Seum nome é: {nome}</h1>
    </div>
  );
}
