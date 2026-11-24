import { useState } from "react";
import { UserCard } from "./UserCard.jsx";

const alunos = [
  {
    id: 1,
    nome: "Erick Cabral",
    curso: "Análise e Desenvolvimento de Sistemas",
    email: "erick1@email.com",
  },
  {
    id: 2,
    nome: "Maria Silva",
    curso: "Ciência da Computação",
    email: "maria2@email.com",
  },
  {
    id: 3,
    nome: "João Santos",
    curso: "Engenharia de Software",
    email: "joao3@email.com",
  },
  {
    id: 4,
    nome: "Ana Oliveira",
    curso: "Sistemas de Informação",
    email: "ana4@email.com",
  },
  {
    id: 5,
    nome: "Pedro Costa",
    curso: "Redes de Computadores",
    email: "pedro5@email.com",
  },
  {
    id: 6,
    nome: "Lucas Ferreira",
    curso: "Engenharia da Computação",
    email: "lucas6@email.com",
  },
  {
    id: 7,
    nome: "Juliana Almeida",
    curso: "Banco de Dados",
    email: "juliana7@email.com",
  },
  {
    id: 8,
    nome: "Gabriel Souza",
    curso: "Segurança da Informação",
    email: "gabriel8@email.com",
  },
  {
    id: 9,
    nome: "Beatriz Lima",
    curso: "Gestão da Tecnologia da Informação",
    email: "beatriz9@email.com",
  },
  {
    id: 10,
    nome: "Rafael Pereira",
    curso: "Desenvolvimento Web",
    email: "rafael10@email.com",
  },
  {
    id: 11,
    nome: "Camila Rodrigues",
    curso: "Análise e Desenvolvimento de Sistemas",
    email: "camila11@email.com",
  },
  {
    id: 12,
    nome: "Matheus Martins",
    curso: "Ciência da Computação",
    email: "matheus12@email.com",
  },
  {
    id: 13,
    nome: "Larissa Gomes",
    curso: "Engenharia de Software",
    email: "larissa13@email.com",
  },
  {
    id: 14,
    nome: "Felipe Ribeiro",
    curso: "Sistemas de Informação",
    email: "felipe14@email.com",
  },
  {
    id: 15,
    nome: "Isabela Carvalho",
    curso: "Redes de Computadores",
    email: "isabela15@email.com",
  },
  {
    id: 16,
    nome: "Bruno Alves",
    curso: "Engenharia da Computação",
    email: "bruno16@email.com",
  },
  {
    id: 17,
    nome: "Amanda Lopes",
    curso: "Banco de Dados",
    email: "amanda17@email.com",
  },
  {
    id: 18,
    nome: "Gustavo Soares",
    curso: "Segurança da Informação",
    email: "gustavo18@email.com",
  },
  {
    id: 19,
    nome: "Letícia Fernandes",
    curso: "Gestão da Tecnologia da Informação",
    email: "leticia19@email.com",
  },
  {
    id: 20,
    nome: "Thiago Barbosa",
    curso: "Desenvolvimento Web",
    email: "thiago20@email.com",
  },
  {
    id: 21,
    nome: "Mariana Rocha",
    curso: "Análise e Desenvolvimento de Sistemas",
    email: "mariana21@email.com",
  },
  {
    id: 22,
    nome: "Vinícius Dias",
    curso: "Ciência da Computação",
    email: "vinicius22@email.com",
  },
  {
    id: 23,
    nome: "Luana Monteiro",
    curso: "Engenharia de Software",
    email: "luana23@email.com",
  },
  {
    id: 24,
    nome: "Eduardo Cardoso",
    curso: "Sistemas de Informação",
    email: "eduardo24@email.com",
  },
  {
    id: 25,
    nome: "Sofia Correia",
    curso: "Redes de Computadores",
    email: "sofia25@email.com",
  },
  {
    id: 26,
    nome: "Daniel Teixeira",
    curso: "Engenharia da Computação",
    email: "daniel26@email.com",
  },
  {
    id: 27,
    nome: "Clara Mendes",
    curso: "Banco de Dados",
    email: "clara27@email.com",
  },
  {
    id: 28,
    nome: "Leonardo Nunes",
    curso: "Segurança da Informação",
    email: "leonardo28@email.com",
  },
  {
    id: 29,
    nome: "Vitória Moreira",
    curso: "Gestão da Tecnologia da Informação",
    email: "vitoria29@email.com",
  },
  {
    id: 30,
    nome: "Henrique Castro",
    curso: "Desenvolvimento Web",
    email: "henrique30@email.com",
  },
  {
    id: 31,
    nome: "Yasmin Azevedo",
    curso: "Análise e Desenvolvimento de Sistemas",
    email: "yasmin31@email.com",
  },
  {
    id: 32,
    nome: "Arthur Campos",
    curso: "Ciência da Computação",
    email: "arthur32@email.com",
  },
  {
    id: 33,
    nome: "Nicole Freitas",
    curso: "Engenharia de Software",
    email: "nicole33@email.com",
  },
  {
    id: 34,
    nome: "Samuel Vieira",
    curso: "Sistemas de Informação",
    email: "samuel34@email.com",
  },
  {
    id: 35,
    nome: "Laura Batista",
    curso: "Redes de Computadores",
    email: "laura35@email.com",
  },
  {
    id: 36,
    nome: "Diego Moraes",
    curso: "Engenharia da Computação",
    email: "diego36@email.com",
  },
  {
    id: 37,
    nome: "Manuela Pinto",
    curso: "Banco de Dados",
    email: "manuela37@email.com",
  },
  {
    id: 38,
    nome: "Caio Cunha",
    curso: "Segurança da Informação",
    email: "caio38@email.com",
  },
  {
    id: 39,
    nome: "Helena Ramos",
    curso: "Gestão da Tecnologia da Informação",
    email: "helena39@email.com",
  },
  {
    id: 40,
    nome: "Igor Machado",
    curso: "Desenvolvimento Web",
    email: "igor40@email.com",
  },
  {
    id: 41,
    nome: "Rebeca Tavares",
    curso: "Análise e Desenvolvimento de Sistemas",
    email: "rebeca41@email.com",
  },
  {
    id: 42,
    nome: "Enzo Barros",
    curso: "Ciência da Computação",
    email: "enzo42@email.com",
  },
  {
    id: 43,
    nome: "Alice Cavalcanti",
    curso: "Engenharia de Software",
    email: "alice43@email.com",
  },
  {
    id: 44,
    nome: "André Farias",
    curso: "Sistemas de Informação",
    email: "andre44@email.com",
  },
  {
    id: 45,
    nome: "Lívia Pires",
    curso: "Redes de Computadores",
    email: "livia45@email.com",
  },
  {
    id: 46,
    nome: "Murilo Rezende",
    curso: "Engenharia da Computação",
    email: "murilo46@email.com",
  },
  {
    id: 47,
    nome: "Bianca Melo",
    curso: "Banco de Dados",
    email: "bianca47@email.com",
  },
  {
    id: 48,
    nome: "Davi Peixoto",
    curso: "Segurança da Informação",
    email: "davi48@email.com",
  },
  {
    id: 49,
    nome: "Cecília Neves",
    curso: "Gestão da Tecnologia da Informação",
    email: "cecilia49@email.com",
  },
  {
    id: 50,
    nome: "Otávio Braga",
    curso: "Desenvolvimento Web",
    email: "otavio50@email.com",
  },
  {
    id: 51,
    nome: "Melissa Andrade",
    curso: "Análise e Desenvolvimento de Sistemas",
    email: "melissa51@email.com",
  },
  {
    id: 52,
    nome: "Vitor Xavier",
    curso: "Ciência da Computação",
    email: "vitor52@email.com",
  },
  {
    id: 53,
    nome: "Eloá Sales",
    curso: "Engenharia de Software",
    email: "eloa53@email.com",
  },
  {
    id: 54,
    nome: "Antônio Macedo",
    curso: "Sistemas de Informação",
    email: "antonio54@email.com",
  },
  {
    id: 55,
    nome: "Sarah Brito",
    curso: "Redes de Computadores",
    email: "sarah55@email.com",
  },
  {
    id: 56,
    nome: "Renan Paiva",
    curso: "Engenharia da Computação",
    email: "renan56@email.com",
  },
  {
    id: 57,
    nome: "Elisa Coelho",
    curso: "Banco de Dados",
    email: "elisa57@email.com",
  },
  {
    id: 58,
    nome: "Cauã Dantas",
    curso: "Segurança da Informação",
    email: "caua58@email.com",
  },
  {
    id: 59,
    nome: "Esther Queiroz",
    curso: "Gestão da Tecnologia da Informação",
    email: "esther59@email.com",
  },
  {
    id: 60,
    nome: "Pablo Miranda",
    curso: "Desenvolvimento Web",
    email: "pablo60@email.com",
  },
  {
    id: 61,
    nome: "Júlia Figueiredo",
    curso: "Análise e Desenvolvimento de Sistemas",
    email: "julia61@email.com",
  },
  {
    id: 62,
    nome: "Nicolas Antunes",
    curso: "Ciência da Computação",
    email: "nicolas62@email.com",
  },
  {
    id: 63,
    nome: "Maitê Borges",
    curso: "Engenharia de Software",
    email: "maite63@email.com",
  },
  {
    id: 64,
    nome: "Kevin Leal",
    curso: "Sistemas de Informação",
    email: "kevin64@email.com",
  },
  {
    id: 65,
    nome: "Giovana Lacerda",
    curso: "Redes de Computadores",
    email: "giovana65@email.com",
  },
  {
    id: 66,
    nome: "Ryan Vasconcelos",
    curso: "Engenharia da Computação",
    email: "ryan66@email.com",
  },
  {
    id: 67,
    nome: "Olívia Nascimento",
    curso: "Banco de Dados",
    email: "olivia67@email.com",
  },
  {
    id: 68,
    nome: "Alexandre Siqueira",
    curso: "Segurança da Informação",
    email: "alexandre68@email.com",
  },
  {
    id: 69,
    nome: "Mirella Guimarães",
    curso: "Gestão da Tecnologia da Informação",
    email: "mirella69@email.com",
  },
  {
    id: 70,
    nome: "Benício Amaral",
    curso: "Desenvolvimento Web",
    email: "benicio70@email.com",
  },
  {
    id: 71,
    nome: "Débora Pacheco",
    curso: "Análise e Desenvolvimento de Sistemas",
    email: "debora71@email.com",
  },
  {
    id: 72,
    nome: "Joaquim Rezende",
    curso: "Ciência da Computação",
    email: "joaquim72@email.com",
  },
  {
    id: 73,
    nome: "Ana Clara Duarte",
    curso: "Engenharia de Software",
    email: "ana73@email.com",
  },
  {
    id: 74,
    nome: "Fernando Goulart",
    curso: "Sistemas de Informação",
    email: "fernando74@email.com",
  },
  {
    id: 75,
    nome: "Catarina Viana",
    curso: "Redes de Computadores",
    email: "catarina75@email.com",
  },
  {
    id: 76,
    nome: "Roberto Lins",
    curso: "Engenharia da Computação",
    email: "roberto76@email.com",
  },
  {
    id: 77,
    nome: "Lorena Portela",
    curso: "Banco de Dados",
    email: "lorena77@email.com",
  },
  {
    id: 78,
    nome: "Marcelo Assunção",
    curso: "Segurança da Informação",
    email: "marcelo78@email.com",
  },
  {
    id: 79,
    nome: "Brenda Nóbrega",
    curso: "Gestão da Tecnologia da Informação",
    email: "brenda79@email.com",
  },
  {
    id: 80,
    nome: "Paulo Henrique",
    curso: "Desenvolvimento Web",
    email: "paulo80@email.com",
  },
  {
    id: 81,
    nome: "Milena Aragão",
    curso: "Análise e Desenvolvimento de Sistemas",
    email: "milena81@email.com",
  },
  {
    id: 82,
    nome: "César Fonseca",
    curso: "Ciência da Computação",
    email: "cesar82@email.com",
  },
  {
    id: 83,
    nome: "Raquel Muniz",
    curso: "Engenharia de Software",
    email: "raquel83@email.com",
  },
  {
    id: 84,
    nome: "Fábio Chaves",
    curso: "Sistemas de Informação",
    email: "fabio84@email.com",
  },
  {
    id: 85,
    nome: "Priscila Mota",
    curso: "Redes de Computadores",
    email: "priscila85@email.com",
  },
  {
    id: 86,
    nome: "Leandro Rangel",
    curso: "Engenharia da Computação",
    email: "leandro86@email.com",
  },
  {
    id: 87,
    nome: "Tainá Brito",
    curso: "Banco de Dados",
    email: "taina87@email.com",
  },
  {
    id: 88,
    nome: "Sérgio Albuquerque",
    curso: "Segurança da Informação",
    email: "sergio88@email.com",
  },
  {
    id: 89,
    nome: "Noemi Nascimento",
    curso: "Gestão da Tecnologia da Informação",
    email: "noemi89@email.com",
  },
  {
    id: 90,
    nome: "Wesley Moura",
    curso: "Desenvolvimento Web",
    email: "wesley90@email.com",
  },
  {
    id: 91,
    nome: "Débora Cavalcante",
    curso: "Análise e Desenvolvimento de Sistemas",
    email: "debora91@email.com",
  },
  {
    id: 92,
    nome: "Danilo Correia",
    curso: "Ciência da Computação",
    email: "danilo92@email.com",
  },
  {
    id: 93,
    nome: "Patrícia Rezende",
    curso: "Engenharia de Software",
    email: "patricia93@email.com",
  },
  {
    id: 94,
    nome: "Jorge Matos",
    curso: "Sistemas de Informação",
    email: "jorge94@email.com",
  },
  {
    id: 95,
    nome: "Nathalia Pimentel",
    curso: "Redes de Computadores",
    email: "nathalia95@email.com",
  },
  {
    id: 96,
    nome: "Alexia Furtado",
    curso: "Engenharia da Computação",
    email: "alexia96@email.com",
  },
  {
    id: 97,
    nome: "Cristiano Lobo",
    curso: "Banco de Dados",
    email: "cristiano97@email.com",
  },
  {
    id: 98,
    nome: "Emanuelly Reis",
    curso: "Segurança da Informação",
    email: "emanuelly98@email.com",
  },
  {
    id: 99,
    nome: "Márcio Vilela",
    curso: "Gestão da Tecnologia da Informação",
    email: "marcio99@email.com",
  },
  {
    id: 100,
    nome: "Aline Magalhães",
    curso: "Desenvolvimento Web",
    email: "aline100@email.com",
  },
];

export function UserList() {
  const [pesquisa, setPesquisa] = useState("");

  const alunosFiltrados = alunos.filter(
    (aluno) =>
      aluno.nome.toLowerCase().includes(pesquisa.toLowerCase()) ||
      aluno.curso.toLowerCase().includes(pesquisa.toLowerCase()),
  );

  return (
    <div className="mx-auto max-w-5xl">
      <h1 className="mb-2 text-3xl font-bold text-gray-800">Lista de alunos</h1>

      <p className="mb-6 text-gray-600">Pesquise pelo nome ou curso.</p>

      <input
        type="text"
        placeholder="Digite o nome ou curso..."
        value={pesquisa}
        onChange={(e) => setPesquisa(e.target.value)}
        className="mb-6 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-blue-500"
      />

      <p className="mb-4 text-sm text-gray-600">
        {alunosFiltrados.length} aluno(s) encontrado(s)
      </p>

      {alunosFiltrados.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {alunosFiltrados.map((aluno) => (
            <UserCard key={aluno.id} {...aluno} />
          ))}
        </div>
      ) : (
        <p className="rounded-lg bg-white p-6 text-center text-gray-500">
          Nenhum aluno encontrado.
        </p>
      )}
    </div>
  );
}
