import { Mail, GitlabIcon as GitHub, Linkedin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-blue-400 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Get in Touch</h2>
        <div className="max-w-md mx-auto text-center">
          <p className="text-xl mb-8">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="mailto:shubhvars2006@gmail.com" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
              <Mail className="w-8 h-8" />
            </a>
            <a href="https://github.com/ShubhVarshney30" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
              <GitHub className="w-8 h-8" />
            </a>
            <a href="https://www.linkedin.com/in/shubh-varshney-25b897314/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
              <Linkedin className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

