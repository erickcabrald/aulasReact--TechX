import { Users, Search, BookOpen, Hash } from "lucide-react";
import type { Aluno } from "../types";

type Props = {
  alunos: Aluno[];
};

function ListaAlunos({ alunos }: Props) {
  return (
    <section className="panel list-panel">
      <div className="panel-heading list-heading">
        <span className="heading-icon"><Users size={19} /></span>
        <div>
          <h2>Alunos cadastrados</h2>
          <p>Lista geral de registros acadêmicos.</p>
        </div>
        <span className="count-badge">{alunos.length}</span>
      </div>

      {alunos.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon"><Search size={22} /></div>
          <h3>Nenhum aluno cadastrado</h3>
          <p>Os alunos adicionados pelo formulário aparecerão aqui.</p>
        </div>
      ) : (
        <div className="student-list">
          {alunos.map((aluno) => (
            <article className="student-row" key={aluno.id}>
              <div className="student-avatar" aria-hidden="true">
                {aluno.nome.trim().charAt(0).toLocaleUpperCase("pt-BR")}
              </div>
              <div className="student-info">
                <h3>{aluno.nome}</h3>
                <p className="student-registration"><Hash size={13} /> Matrícula: {aluno.matricula}</p>
                <div className="student-disciplines">
                  <span className="mini-label"><BookOpen size={13} /> Disciplinas</span>
                  <div className="tag-list">
                    {aluno.disciplinas.map((disciplina) => (
                      <span className="discipline-tag" key={disciplina}>{disciplina}</span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default ListaAlunos;