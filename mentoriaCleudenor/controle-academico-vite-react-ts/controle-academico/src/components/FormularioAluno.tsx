import { useState, type FormEvent } from "react";
import { UserPlus, UserRound, Hash, BookOpen, Check } from "lucide-react";

type Props = {
  disciplinasDisponiveis: string[];
  onCadastrar: (dados: {
    nome: string;
    matricula: string;
    disciplinas: string[];
  }) => boolean;
};

function FormularioAluno({ disciplinasDisponiveis, onCadastrar }: Props) {
  const [nome, setNome] = useState("");
  const [matricula, setMatricula] = useState("");
  const [disciplinas, setDisciplinas] = useState<string[]>([]);
  const [erros, setErros] = useState<{ nome?: string; matricula?: string; disciplinas?: string }>({});

  function alternarDisciplina(disciplina: string) {
    setDisciplinas((atuais) =>
      atuais.includes(disciplina)
        ? atuais.filter((item) => item !== disciplina)
        : [...atuais, disciplina],
    );
    setErros((atuais) => ({ ...atuais, disciplinas: undefined }));
  }

  function enviarFormulario(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const novosErros: typeof erros = {};
    if (!nome.trim()) novosErros.nome = "Informe o nome completo.";
    if (!matricula.trim()) novosErros.matricula = "Informe a matrícula.";
    if (disciplinas.length === 0) {
      novosErros.disciplinas = "Selecione pelo menos uma disciplina.";
    }

    setErros(novosErros);
    if (Object.keys(novosErros).length > 0) return;

    const cadastrado = onCadastrar({ nome, matricula, disciplinas });
    if (cadastrado) {
      setNome("");
      setMatricula("");
      setDisciplinas([]);
      setErros({});
    } else if (matricula.trim()) {
      setErros((atuais) => ({
        ...atuais,
        matricula: "Confira se esta matrícula já foi cadastrada.",
      }));
    }
  }

  return (
    <section className="panel form-panel">
      <div className="panel-heading">
        <span className="heading-icon"><UserPlus size={19} /></span>
        <div>
          <h2>Cadastrar aluno</h2>
          <p>Preencha os dados para registrar uma matrícula.</p>
        </div>
      </div>

      <form onSubmit={enviarFormulario} noValidate>
        <div className="field-group">
          <label htmlFor="nome"><UserRound size={15} /> Nome completo <span>*</span></label>
          <input
            id="nome"
            type="text"
            value={nome}
            onChange={(event) => {
              setNome(event.target.value);
              setErros((atuais) => ({ ...atuais, nome: undefined }));
            }}
            placeholder="Ex.: Maria Silva"
            aria-invalid={Boolean(erros.nome)}
            aria-describedby={erros.nome ? "nome-erro" : undefined}
          />
          {erros.nome && <p className="field-error" id="nome-erro">{erros.nome}</p>}
        </div>

        <div className="field-group">
          <label htmlFor="matricula"><Hash size={15} /> Matrícula acadêmica <span>*</span></label>
          <input
            id="matricula"
            type="text"
            value={matricula}
            onChange={(event) => {
              setMatricula(event.target.value);
              setErros((atuais) => ({ ...atuais, matricula: undefined }));
            }}
            placeholder="Ex.: 2026001"
            aria-invalid={Boolean(erros.matricula)}
            aria-describedby={erros.matricula ? "matricula-erro" : undefined}
          />
          {erros.matricula && <p className="field-error" id="matricula-erro">{erros.matricula}</p>}
          <p className="field-hint">A matrícula deve ser única para cada aluno.</p>
        </div>

        <fieldset className="discipline-fieldset">
          <legend><BookOpen size={15} /> Disciplinas <span>*</span></legend>
          <p className="field-hint discipline-hint">Selecione uma ou mais disciplinas.</p>
          <div className="discipline-options">
            {disciplinasDisponiveis.map((disciplina) => {
              const selecionada = disciplinas.includes(disciplina);
              return (
                <label
                  className={`discipline-option${selecionada ? " selected" : ""}`}
                  key={disciplina}
                >
                  <input
                    type="checkbox"
                    checked={selecionada}
                    onChange={() => alternarDisciplina(disciplina)}
                  />
                  <span className="custom-checkbox" aria-hidden="true">
                    {selecionada && <Check size={13} strokeWidth={3} />}
                  </span>
                  <span>{disciplina}</span>
                </label>
              );
            })}
          </div>
          {erros.disciplinas && <p className="field-error">{erros.disciplinas}</p>}
          <p className="selected-count">
            {disciplinas.length} {disciplinas.length === 1 ? "disciplina selecionada" : "disciplinas selecionadas"}
          </p>
        </fieldset>

        <button className="primary-button" type="submit">
          <UserPlus size={17} />
          Cadastrar aluno
        </button>
        <p className="required-note"><span>*</span> Campos obrigatórios</p>
      </form>
    </section>
  );
}

export default FormularioAluno;