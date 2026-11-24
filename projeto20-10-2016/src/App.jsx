import "./App.css";
import { Cartao } from "./components/cartao";

const nome = "Erick Cabral Dutra";
const idade = 17;

function App() {
  return (
    <>
      <h1 className="">{nome}</h1>
      <h2>{idade} anos</h2>
      <button>Clique neste botão</button>
      <Cartao titulo="fastify" texto="é um framework javascript" />
      <Cartao
        titulo="exprees"
        texto="outro framework de rotas para java scriot"
      />
    </>
  );
}

export default App;
