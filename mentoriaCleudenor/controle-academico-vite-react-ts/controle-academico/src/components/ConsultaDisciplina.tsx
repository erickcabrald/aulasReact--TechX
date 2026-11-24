import { useId } from "react";
import { BookOpen, Users, Hash, GraduationCap } from "lucide-react";
import type { Aluno } from "../types";

type Props = {
  disciplinas: string[];
  disciplinaSelecionada: string;
  onSelecionarDisciplina: (disciplina: string) => void;
  alunos: Aluno[];
};

function ConsultaDisciplina({
  disciplinas,
  disciplinaSelecionada,
  onSelecionarDisciplina,
  alunos,
}: Props) {
  const selectId = useId();

  return (
    <section className="panel discipline-panel">
      <div className="panel-heading">
        <span className="heading-icon violet-heading"><BookOpen size={19} /></span>
        <div>
          <h2>Consulta por disciplina</h2>
          <p>Veja os alunos vinculados a cada disciplina.</p>
        </div>
      </div>

      <div className="filter-field">
        <label htmlFor={selectId}>Disciplina selecionada</label>
        <select
          id={selectId}
          value={disciplinaSelecionada}
          onChange={(event) => onSelecionarDisciplina(event.target.value)}
        >
          {disciplinas.map((disciplina) => (
            <option value={disciplina} key={disciplina}>{disciplina}</option>
          ))}
        </select>
      </div>

      <div className="discipline-result-heading">
        <div>
          <span className="result-overline">ALUNOS MATRICULADOS</span>
          <h3>{disciplinaSelecionada}</h3>
        </div>
        <span className="result-count"><Users size={15} /> {alunos.length}</span>
      </div>

      {alunos.length === 0 ? (
        <div className="empty-state compact-empty">
          <div className="empty-icon"><GraduationCap size={22} /></div>
          <h3>Nenhum aluno matriculado nesta disciplina.</h3>
          <p>Quando houver matrículas nesta disciplina, os alunos serão exibidos aqui.</p>
        </div>
      ) : (
        <div className="discipline-student-list">
          {alunos.map((aluno) => (
            <div className="discipline-student-row" key={aluno.id}>
              <div className="student-avatar small-avatar" aria-hidden="true">
                {aluno.nome.trim().charAt(0).toLocaleUpperCase("pt-BR")}
              </div>
              <div className="discipline-student-info">
                <strong>{aluno.nome}</strong>
                <span><Hash size={13} /> Matrícula: {aluno.matricula}</span>
              </div>
              <span className="enrolled-mark">Matriculado</span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default ConsultaDisciplina;