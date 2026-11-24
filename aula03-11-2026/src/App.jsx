import "./App.css";
import { Aula03 } from "./Aula03";
import { useState } from "react";
function App() {
  const [contador, setContador] = useState(0);
  const [nome, setNome] = useState("");
  function incrementar() {
    setContador(contador + 1);
    console.log(contador);
  }

  function NomeCompleto(e) {
    setNome(e.target.value);
    console.log(e.target.value);
  }
  return (
    <>
      <Aula03 />
      <p>contador: {contador}</p>
      <button onClick={incrementar}>Incrementar</button>
      <button
        style={{ marginTop: 5, marginBottom: 5 }}
        onClick={() => setContador(contador - 1)}
      >
        Decrementar
      </button>
      <button
        onClick={() => {
          setContador(0);
        }}
      >
        Zerar
      </button>
      <label htmlFor="Nome completo">Nome completo:</label>
      <input
        type="text"
        placeholder="Digite seu nome completo"
        onChange={NomeCompleto}
      />
      <h2>Nome: {nome}</h2>
    </>
  );
}

export default App;
