import { Code } from 'lucide-react'

const problems = [
  { name: 'Two Sum', difficulty: 'Easy', category: 'Arrays' },
  { name: 'Longest Substring Without Repeating Characters', difficulty: 'Medium', category: 'Strings' },
  { name: 'Merge K Sorted Lists', difficulty: 'Hard', category: 'Linked Lists' },
  { name: 'Binary Tree Level Order Traversal', difficulty: 'Medium', category: 'Trees' },
  { name: 'Dijkstra\'s Algorithm', difficulty: 'Hard', category: 'Graphs' },
]

export default function ProblemSolving() {
  return (
    <section className="py-20 bg-blue-300 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-black-400">Problem-Solving Showcase</h2>
        <div className="overflow-x-auto">
          <table className="w-full bg-white dark:bg-gray-800 shadow-md rounded-lg">
            <thead>
              <tr className="bg-blue-400 dark:bg-gray-700">
                <th className="py-3 px-6 text-left">Problem</th>
                <th className="py-3 px-6 text-left">Difficulty</th>
                <th className="py-3 px-6 text-left">Category</th>
                <th className="py-3 px-6 text-left">Solution</th>
              </tr>
            </thead>
            <tbody>
              {problems.map((problem) => (
                <tr key={problem.name} className="border-b border-blue-400 dark:border-blue-700 text-blue-600">
                  <td className="py-4 px-6">{problem.name}</td>
                  <td className="py-4 px-6">
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
                      problem.difficulty === 'Easy' ? 'bg-green-200 text-green-800' :
                      problem.difficulty === 'Medium' ? 'bg-yellow-200 text-yellow-800' :
                      'bg-red-200 text-red-800'
                    }`}>
                      {problem.difficulty}
                    </span>
                  </td>
                  <td className="py-4 px-6">{problem.category}</td>
                  <td className="py-4 px-6">
                    <button className="flex items-center text-blue-600 hover:underline">
                      <Code className="w-4 h-4 mr-1" />
                      View Code
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

