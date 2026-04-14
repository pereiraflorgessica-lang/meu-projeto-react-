function Projects() {
  const projetos = [
    { titulo: "Site Portfólio", descricao: "Meu primeiro site em HTML/CSS" },
    { titulo: "App React", descricao: "Aplicação feita em React" }
  ];

  return (
    <section id="projetos">
      <h2>Projetos</h2>
      <ul>
        {projetos.map((p, index) => (
          <li key={index}>
            <h3>{p.titulo}</h3>
            <p>{p.descricao}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects; 
https://pereiraflorgessica-lang.github.io/portfolio-m/
function Projects() {
  const projetos = [
    { titulo: "Calculadora Web", descricao: "Desenvolvida com HTML, CSS e JavaScript." },
    { titulo: "Lista de Tarefas", descricao: "Sistema de tarefas com LocalStorage." },
    { titulo: "Landing Page", descricao: "Página moderna e responsiva para divulgação." }
  ];

  return (
    <section id="projetos">
      <h2>Meus Projetos</h2>
      <ul>
        {projetos.map((p, index) => (
          <li key={index}>
            <h3>{p.titulo}</h3>
            <p>{p.descricao}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;