import { ExternalLink } from 'lucide-react'
import Link from 'next/link'

const projects = [
  {
    title: 'Advanced Sorting Algorithm Visualizer',
    description: 'Interactive web app showcasing various sorting algorithms with step-by-step visualization.',
    link: 'https://kzmq8hgzvtlr3shme81t.lite.vusercontent.net/',
  },
  {
    title: 'Graph Theory Problem Solver',
    description: 'Java application implementing advanced graph algorithms to solve complex network problems.',
    link: 'https://kzmg35zkt3uu70sk4b4j.lite.vusercontent.net/',
  },
  {
    title: 'Dynamic Programming Challenges',
    description: 'Collection of optimized solutions to challenging DP problems from competitive programming platforms.',
    link: 'https://kzmn6ry0sdlhk129vjow.lite.vusercontent.net/',
  },
]

export default function Projects() {
  return (
    <section className="py-20 bg-blue-300 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Projects & Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-blue-400">
          {projects.map((project) => (
            <div key={project.title} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              <Link 
                href={project.link} 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:underline"
              >
                View Project
                <ExternalLink className="ml-1 w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

