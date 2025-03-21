export default function Projects() {
    const projects = [
      {
        id: 1,
        name: "Java-Based Game Development",
        author: "Me",
        languages: ["Java", "Swing"],
        description: "A simple 2D game built using Java Swing.",
      },
      {
        id: 2,
        name: "Web Development - fementity.ca",
        author: "Me",
        languages: ["HTML", "CSS", "JavaScript"],
        description: "A website for a local business.",
      },
    ];
  
    return (
      <div className="container">
        <h1>Projects</h1>
        <p>Here are some of my projects:</p>
        <ul>
          {projects.map((project) => (
            <li key={project.id}>
              <h3>{project.name}</h3>
              <p>Author: {project.author}</p>
              <p>Languages: {project.languages.join(", ")}</p>
              <p>Description: {project.description}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }