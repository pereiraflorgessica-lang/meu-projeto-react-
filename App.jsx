import React from 'react'

// PASSO 1: O Array de Dados (Onde ficam seus projetos)
const meusProjetos = [
  {
    id: 1,
    nome: "FitPlan Pro",
    descricao: "Um sistema para gerenciar treinos e dietas.",
    link: "https://github.com/seu-usuario/fitplan"
  },
  {
    id: 2,
    nome: "Meu Portfólio Estático",
    descricao: "A primeira versão do meu site usando HTML e CSS.",
    link: "https://github.com/seu-usuario/portfolio-antigo"
  },
  {
    id: 3,
    nome: "Projeto Futuro",
    descricao: "Aqui virá um novo projeto incrível em breve.",
    link: "#"
  }
];

// PASSO 2: Componente 1 - O Card (O molde de cada projeto)
function ProjetoCard({ projeto }) {
  return (
    <div style={{ border: '2px solid #646cff', borderRadius: '8px', padding: '15px', margin: '10px' }}>
      <h3>{projeto.nome}</h3>
      <p>{projeto.descricao}</p>
      <a href={projeto.link} target="_blank" rel="noreferrer">Ver no GitHub</a>
    </div>
  );
}

// PASSO 3: Componente 2 - A Seção de Projetos (Onde a lista é renderizada)
function SecaoProjetos() {
  return (
    <section style={{ padding: '20px' }}>
      <h2>Meus Projetos</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
        {/* Aqui acontece a renderização dinâmica usando .map() */}
        {meusProjetos.map((item) => (
          <ProjetoCard key={item.id} projeto={item} />
        ))}
      </div>
    </section>
  );
}

// O componente principal que junta tudo
function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
      <h1>Bem-vindo ao meu Portfólio React</h1>
      <p>Este site foi migrado para React com sucesso!</p>
      
      {/* Chamando o componente que criamos */}
      <SecaoProjetos />
      
    </div>
  )
}

export default App