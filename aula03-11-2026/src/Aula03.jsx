import { useState } from "react";
export function Aula03() {
  const [nome, setNome] = useState("");
  function enviar(e) {
    e.preventDefault();
    console.log("Nome enviado: ", nome);
  }

  return (
    <>
      <form onSubmit={enviar}>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <button type="submit" onClick={enviar}>
          Enviar
        </button>
      </form>
    </>
  );
}
