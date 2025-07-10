import React from 'react';

const skills = [
  { name: 'Java', level: 3 },
  { name: 'C#', level: 3 },
  { name: 'C++', level: 2 },
  { name: 'HTML', level: 2 },
  { name: 'CSS/Sass', level: 2 },
  { name: 'JavaScript', level: 3 },
  { name: 'TypeScript', level: 3 },
  { name: 'React', level: 3 },
  { name: 'Node.js', level: 2 },
  { name: 'Next.js', level: 2 },
  { name: 'Python', level: 5 },
  { name: 'Django', level: 2 },
  { name: 'Flask', level: 2 },
  { name: 'MySQL', level: 2 },
  { name: 'Git/GitHub', level: 3 },
];

interface Skill {
    name: string;
    level: number;
  }
  
  const Skills: React.FC = () => {
    const groupedSkills = skills.reduce((acc, skill) => {
      const level = skill.level;
      if (!acc[level]) {
        acc[level] = [];
      }
      acc[level].push(skill);
      return acc;
    }, {} as Record<number, Skill[]>);
  
    const sortedLevels = Object.keys(groupedSkills)
      .map(Number)
      .sort((a, b) => b - a);
  
    return (
      <section id="skills" style={{ padding: '4rem 2rem', backgroundColor: 'rgba(40, 44, 52, 0.7)' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Skills</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', alignItems: 'flex-start' }}>
          {sortedLevels.map(level => (
            <div key={level} style={{ background: '#2a2e34', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', minWidth: '200px', textAlign: 'center' }}>
              <h3 style={{ marginTop: 0, marginBottom: '1rem', borderBottom: '1px solid #444', paddingBottom: '0.5rem' }}>Level {level}</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {groupedSkills[level].map(skill => (
                  <li key={skill.name} style={{ background: '#333740', padding: '0.5rem 1rem', borderRadius: '4px', marginBottom: '0.5rem' }}>
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Skills;
