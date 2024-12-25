import { CheckCircle } from 'lucide-react'

const journeySteps = [
  { year: '2024', event: 'Started learning Java and basic data structures' },
  { year: '2024 Q2', event: 'Completed first DSA course and began solving LeetCode problems' },
  { year: '2024 Q4', event: 'Participated in my first coding competition' },
  { year: '2025 Q2', event: 'Implemented advanced graph algorithms and dynamic programming solutions' },
  { year: '2025 Q4', event: 'Contributed to open-source DSA libraries and mentored junior developers' },
]

export default function CodingJourney() {
  return (
    <section className="py-20 bg-blue-300 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">My Coding Journey</h2>
        <div className="max-w-3xl mx-auto">
          {journeySteps.map((step, index) => (
            <div key={`${step.year}-${index}`} className="flex mb-8 last:mb-0">
              <div className="flex flex-col items-center mr-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                {index !== journeySteps.length - 1 && <div className="h-full w-0.5 bg-blue-600"></div>}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">{step.year}</h3>
                <p className="text-gray-600 dark:text-gray-300">{step.event}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

