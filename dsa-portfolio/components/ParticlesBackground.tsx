'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    particlesJS: any
  }
}

export default function ParticlesBackground() {
  useEffect(() => {
    const loadParticles = async () => {
      try {
        // Load particles.js from CDN
        const script = document.createElement('script')
        script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js'
        script.async = true
        document.body.appendChild(script)

        script.onload = () => {
          window.particlesJS('particles-js', {
            particles: {
              number: {
                value: 6,
                density: {
                  enable: true,
                  value_area: 800
                }
              },
              color: {
                value: '#1b1e34'
              },
              shape: {
                type: 'circle',
              },
              opacity: {
                value: 0.5,
                random: true,
                anim: {
                  enable: true,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false
                }
              },
              size: {
                value: 160,
                random: true,
                anim: {
                  enable: true,
                  speed: 10,
                  size_min: 40,
                  sync: false
                }
              },
              line_linked: {
                enable: false,
              },
              move: {
                enable: true,
                speed: 3,
                direction: 'none',
                random: true,
                straight: false,
                out_mode: 'out',
                bounce: false,
              }
            },
            interactivity: {
              detect_on: 'canvas',
              events: {
                onhover: {
                  enable: true,
                  mode: 'bubble'
                },
                onclick: {
                  enable: true,
                  mode: 'push'
                },
                resize: true
              },
              modes: {
                bubble: {
                  distance: 400,
                  size: 100,
                  duration: 2,
                  opacity: 0.8,
                  speed: 3
                },
                push: {
                  particles_nb: 1
                }
              }
            },
            retina_detect: true
          })
        }
      } catch (error) {
        console.error('Error loading particles.js:', error)
      }
    }

    loadParticles()

    return () => {
      // Cleanup
      const scripts = document.getElementsByTagName('script')
      for (let script of scripts) {
        if (script.src.includes('particles.min.js')) {
          document.body.removeChild(script)
        }
      }
    }
  }, [])

  return <div id="particles-js" className="absolute inset-0 z-0" />
}

