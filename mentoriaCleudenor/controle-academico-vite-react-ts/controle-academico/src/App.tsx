import { useMemo, useState } from "react";
import { GraduationCap } from "lucide-react";
import FormularioAluno from "./components/FormularioAluno";
import ListaAlunos from "./components/ListaAlunos";
import ConsultaDisciplina from "./components/ConsultaDisciplina";
import MensagemFeedback from "./components/MensagemFeedback";
import type { Aluno, Feedback } from "./types";
import "./App.css";

const disciplinasDisponiveis = [
  "Algoritmos e Programação",
  "Banco de Dados",
  "Desenvolvimento Web",
  "Engenharia de Software",
  "Estrutura de Dados",
  "Matemática",
  "Redes de Computadores",
];

function normalizarMatricula(matricula: string) {
  return matricula.trim().toLocaleLowerCase("pt-BR");
}

function App() {
  const [alunos, setAlunos] = useState<Aluno[]>([]);
  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const [disciplinaSelecionada, setDisciplinaSelecionada] = useState(
    disciplinasDisponiveis[0],
  );

  const alunosDaDisciplina = useMemo(
    () =>
      alunos.filter((aluno) =>
        aluno.disciplinas.includes(disciplinaSelecionada),
      ),
    [alunos, disciplinaSelecionada],
  );

  function cadastrarAluno(dados: {
    nome: string;
    matricula: string;
    disciplinas: string[];
  }) {
    const nome = dados.nome.trim();
    const matricula = dados.matricula.trim();

    if (!nome) {
      setFeedback({ tipo: "erro", mensagem: "Informe o nome completo do aluno." });
      return false;
    }

    if (!matricula) {
      setFeedback({ tipo: "erro", mensagem: "Informe a matrícula acadêmica." });
      return false;
    }

    if (dados.disciplinas.length === 0) {
      setFeedback({
        tipo: "erro",
        mensagem: "Selecione pelo menos uma disciplina.",
      });
      return false;
    }

    const matriculaExiste = alunos.some(
      (aluno) => normalizarMatricula(aluno.matricula) === normalizarMatricula(matricula),
    );

    if (matriculaExiste) {
      setFeedback({
        tipo: "erro",
        mensagem: "Essa matrícula já está cadastrada. Informe uma matrícula diferente.",
      });
      return false;
    }

    const novoAluno: Aluno = {
      id: crypto.randomUUID(),
      nome,
      matricula,
      disciplinas: [...new Set(dados.disciplinas)],
    };

    setAlunos((alunosAtuais) => [...alunosAtuais, novoAluno]);
    setFeedback({
      tipo: "sucesso",
      mensagem: `${nome} foi cadastrado(a) com sucesso.`,
    });
    return true;
  }

  return (
    <main className="app-shell">
      <header className="page-header">
        <div className="brand-mark" aria-hidden="true">
          <GraduationCap size={25} strokeWidth={2.1} />
        </div>
        <div>
          <p className="eyebrow">GESTÃO ACADÊMICA</p>
          <h1>Controle Acadêmico</h1>
          <p className="page-subtitle">
            Gerencie alunos e acompanhe as matrículas por disciplina.
          </p>
        </div>
      </header>

      <div className="main-layout">
        <aside className="form-column">
          <FormularioAluno
            disciplinasDisponiveis={disciplinasDisponiveis}
            onCadastrar={cadastrarAluno}
          />
        </aside>

        <section className="consultas-column" aria-label="Consultas acadêmicas">
          {feedback && (
            <MensagemFeedback
              feedback={feedback}
              onFechar={() => setFeedback(null)}
            />
          )}
          <ListaAlunos alunos={alunos} />
          <ConsultaDisciplina
            disciplinas={disciplinasDisponiveis}
            disciplinaSelecionada={disciplinaSelecionada}
            onSelecionarDisciplina={setDisciplinaSelecionada}
            alunos={alunosDaDisciplina}
          />
        </section>
      </div>
      <footer className="page-footer">
        <span>Controle Acadêmico</span>
        <span>Os dados ficam disponíveis somente durante esta sessão.</span>
      </footer>
    </main>
  );
}

export default App;