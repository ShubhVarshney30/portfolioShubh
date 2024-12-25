import { Code, GitBranch, Cpu, BarChart } from 'lucide-react'
import '../styles/skills-animations.css'
import { useState, useEffect } from 'react';

const skills = [
  { name: 'Java', icon: Code, description: 'Expert-level proficiency in Java programming', color: 'from-blue-400 to-blue-600' },
  { name: 'Data Structures', icon: GitBranch, description: 'Deep understanding of various data structures', color: 'from-green-400 to-green-600' },
  { name: 'Algorithms', icon: Cpu, description: 'Proficient in designing and implementing efficient algorithms', color: 'from-purple-400 to-purple-600' },
  { name: 'Problem Solving', icon: BarChart, description: 'Strong analytical and problem-solving skills', color: 'from-red-400 to-red-600' },
]

export default function Skills() {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduceMotion(mediaQuery.matches);

    const handleChange = () => setReduceMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <section className="py-20 bg-gray-300 dark:bg-gray-800 text-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills & Expertise</h2>
        <div className="flex justify-center mb-6">
          <button
            onClick={() => setReduceMotion(!reduceMotion)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
          >
            {reduceMotion ? 'Enable' : 'Disable'} Animations
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div 
              key={skill.name} 
              className={`skill-card bg-gradient-to-br ${skill.color} p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300`} 
              data-motion-reduce={reduceMotion ? "reduce" : "no-preference"}
            >
              <skill.icon className="w-12 h-12 mb-4 text-white skill-icon" />
              <h3 className="text-xl font-semibold mb-2 text-white">{skill.name}</h3>
              <p className="text-gray-100">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

