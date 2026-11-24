export type Aluno = {
  id: string;
  nome: string;
  matricula: string;
  disciplinas: string[];
};

export type Feedback = {
  tipo: "sucesso" | "erro";
  mensagem: string;
};