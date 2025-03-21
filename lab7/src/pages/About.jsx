import { useState } from "react";

export default function About() {
  const skills = [
    { name: "JavaScript", category: "Frontend" },
    { name: "React", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "Python", category: "Backend" },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredSkills, setFilteredSkills] = useState(skills);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    setFilteredSkills(
      skills.filter(
        (skill) =>
          skill.name.toLowerCase().includes(term) ||
          skill.category.toLowerCase().includes(term)
      )
    );
  };

  return (
    <div className="container">
      <h1>About Me</h1>
      <p>I am a Computer Science student with a passion for technology and software development.</p>
      <h2>Skills</h2>
      <input
        type="text"
        placeholder="Search skills..."
        value={searchTerm}
        onChange={handleSearch}
        className="form-control mb-3"
      />
      <ul>
        {filteredSkills.map((skill, index) => (
          <li key={index}>
            {skill.name} - <em>{skill.category}</em>
          </li>
        ))}
      </ul>
    </div>
  );
}