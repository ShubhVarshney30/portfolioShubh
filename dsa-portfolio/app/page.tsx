import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import CodingJourney from '@/components/CodingJourney'
import ProblemSolving from '@/components/ProblemSolving'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Hero />
      <div className="space-y-20">
        <Skills />
        <Projects />
        <CodingJourney />
        <ProblemSolving />
        <Contact />
      </div>
    </main>
  )
}

