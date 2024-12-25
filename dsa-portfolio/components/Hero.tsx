import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import ParticlesBackground from './ParticlesBackground'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 to-indigo-500 text-white py-20 min-h-screen flex items-center overflow-hidden">
      <ParticlesBackground />
      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-black bg-opacity-30 p-8 rounded-lg backdrop-filter backdrop-blur-sm">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Shubh Varshney</h1>
          <h2 className="text-2xl md:text-3xl mb-6">Data Structures & Algorithms Expert</h2>
          <p className="text-xl mb-8 max-w-2xl">
            Passionate about solving complex problems and optimizing code efficiency. 
            Specializing in Java and advanced DSA concepts.
          </p>
          <Link 
            href="https://kzmldjcloymnx2l5g1fo.lite.vusercontent.net/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition duration-300"
          >
            Get in touch
            <ArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}

