"use client"

import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Reveal animations on scroll
      const reveals = document.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right')
      reveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top
        const elementVisible = 150
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('revealed')
        }
      })
    }
    
    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0f2c] to-[#111a44] text-white">
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0a0f2c]/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-white">Club Data Pirates</div>
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection("home")} className="text-white hover:text-purple-400 transition-colors">Home</button>
              <button onClick={() => scrollToSection("about")} className="text-white hover:text-purple-400 transition-colors">About Us</button>
              <div className="relative group">
                <button className="text-white hover:text-purple-400 transition-colors flex items-center">
                  Event
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-[#111a44] rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <a href="#" className="block px-4 py-2 text-white hover:bg-purple-600 rounded-t-lg">Upcoming Events</a>
                  <a href="#" className="block px-4 py-2 text-white hover:bg-purple-600">Past Events</a>
                  <a href="#" className="block px-4 py-2 text-white hover:bg-purple-600 rounded-b-lg">Event Calendar</a>
                </div>
              </div>
              <button onClick={() => scrollToSection("contact")} className="text-white hover:text-purple-400 transition-colors">Contact Us</button>
            </div>
            <Button className="bg-[#6c3df2] hover:bg-[#6c3df2]/80 text-white rounded-full px-6 py-2 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50">
              Admin Login
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side */}
            <div className="space-y-6 scroll-reveal-left">
              <p className="text-[#cccccc] text-lg md:text-xl">Welcome to The</p>
              <h1 className="text-5xl md:text-6xl font-bold text-white uppercase">Club Data Pirates</h1>
              <p className="text-2xl md:text-3xl text-[#cccccc]">
                the place where <span className="text-[#ff9800] font-semibold">creativity</span> come together
              </p>
              <Button className="bg-[#6c3df2] hover:bg-[#6c3df2]/80 text-white rounded-full px-8 py-4 text-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105">
                Join The Crew
              </Button>
            </div>

            {/* Right Side */}
            <div className="relative scroll-reveal-right">
              <div className="aspect-square bg-gradient-to-br from-[#6c3df2]/20 to-[#ff9800]/20 rounded-2xl flex items-center justify-center relative overflow-hidden">
                {/* Floating particles */}
                <div className="absolute inset-0">
                  {[...Array(20)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute rounded-full bg-purple-500/20 animate-pulse"
                      style={{
                        width: Math.random() * 20 + 10 + 'px',
                        height: Math.random() * 20 + 10 + 'px',
                        top: Math.random() * 100 + '%',
                        left: Math.random() * 100 + '%',
                        animationDuration: Math.random() * 3 + 2 + 's',
                        animationDelay: Math.random() * 2 + 's'
                      }}
                    />
                  ))}
                </div>
                <div className="relative z-10 text-center">
                  <div className="text-8xl mb-4">🏴‍☠️</div>
                  <div className="text-3xl font-bold text-white">Data Pirates</div>
                  <div className="text-[#b0b8d4]">Est. 2010</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-reveal">
            <p className="text-[#cccccc] text-lg mb-2">About Us</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#ff9800] uppercase">What We Do</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image */}
            <div className="relative scroll-reveal-left">
              <div className="aspect-video bg-gradient-to-br from-[#6c3df2]/30 to-[#ff9800]/30 rounded-xl overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-6xl">👥</div>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="space-y-6 scroll-reveal-right">
              <p className="text-[#cccccc] text-lg leading-relaxed">
                At Data Pirates, we don't just adapt to the data-driven world — we shape it. With a passion for exploring information, 
                decoding complexity, and crafting powerful solutions, we turn curious minds into digital creators…
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#6c3df2] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[#cccccc]">Data Analysis & Visualization</span>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#6c3df2] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[#cccccc]">Hands-on Learning with Python, SQL & More</span>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#6c3df2] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[#cccccc]">Database Design & Management</span>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#6c3df2] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[#cccccc]">Real-World Projects & Problem Solving</span>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#6c3df2] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[#cccccc]">Workshops, Hackathons & Technical Events</span>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#6c3df2] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[#cccccc]">A Thriving Community of Data Enthusiasts</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-[#6c3df2]/10 to-[#ff9800]/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group scroll-reveal">
              <div className="w-20 h-20 mx-auto mb-4 bg-[#6c3df2]/20 rounded-full flex items-center justify-center border-2 border-[#6c3df2] group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300">
                <div className="text-3xl">👥</div>
              </div>
              <div className="text-4xl font-bold text-white mb-1">655+</div>
              <div className="text-[#b0b8d4]">Members</div>
            </div>

            <div className="group scroll-reveal">
              <div className="w-20 h-20 mx-auto mb-4 bg-[#6c3df2]/20 rounded-full flex items-center justify-center border-2 border-[#6c3df2] group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300">
                <div className="text-3xl">💬</div>
              </div>
              <div className="text-4xl font-bold text-white mb-1">300+</div>
              <div className="text-[#b0b8d4]">Feedback</div>
            </div>

            <div className="group scroll-reveal">
              <div className="w-20 h-20 mx-auto mb-4 bg-[#6c3df2]/20 rounded-full flex items-center justify-center border-2 border-[#6c3df2] group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300">
                <div className="text-3xl">🎯</div>
              </div>
              <div className="text-4xl font-bold text-white mb-1">5 years+</div>
              <div className="text-[#b0b8d4]">Experience</div>
            </div>

            <div className="group scroll-reveal">
              <div className="w-20 h-20 mx-auto mb-4 bg-[#6c3df2]/20 rounded-full flex items-center justify-center border-2 border-[#6c3df2] group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300">
                <div className="text-3xl">🎉</div>
              </div>
              <div className="text-4xl font-bold text-white mb-1">155+</div>
              <div className="text-[#b0b8d4]">Events</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Meet Our Team</h2>
            <p className="text-[#cccccc] text-lg max-w-2xl mx-auto">
              Gain insights from industry experts and master real-world skills…
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Team Card 1 */}
            <div className="bg-[#111a44]/50 rounded-xl p-6 border border-[#6c3df2]/20 hover:border-[#6c3df2]/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 hover:-translate-y-1 scroll-reveal">
              <div className="text-center mb-6">
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-[#6c3df2] to-[#ff9800] rounded-full flex items-center justify-center text-4xl">
                  👨‍💼
                </div>
                <h3 className="text-xl font-bold text-white mb-1">John Munro</h3>
                <p className="text-[#b0b8d4]">Data Expert Mentor</p>
              </div>
              <div className="flex justify-center space-x-4">
                <div className="w-10 h-10 bg-[#6c3df2]/20 rounded-full flex items-center justify-center hover:bg-[#6c3df2]/40 transition-colors cursor-pointer">
                  <div className="text-lg">in</div>
                </div>
                <div className="w-10 h-10 bg-[#6c3df2]/20 rounded-full flex items-center justify-center hover:bg-[#6c3df2]/40 transition-colors cursor-pointer">
                  <div className="text-lg">📷</div>
                </div>
                <div className="w-10 h-10 bg-[#6c3df2]/20 rounded-full flex items-center justify-center hover:bg-[#6c3df2]/40 transition-colors cursor-pointer">
                  <div className="text-lg">✉️</div>
                </div>
              </div>
            </div>

            {/* Team Card 2 */}
            <div className="bg-[#111a44]/50 rounded-xl p-6 border border-[#6c3df2]/20 hover:border-[#6c3df2]/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 hover:-translate-y-1 scroll-reveal">
              <div className="text-center mb-6">
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-[#6c3df2] to-[#ff9800] rounded-full flex items-center justify-center text-4xl">
                  👨‍💼
                </div>
                <h3 className="text-xl font-bold text-white mb-1">Adolf Stalin</h3>
                <p className="text-[#b0b8d4]">UX Specialist Mentor</p>
              </div>
              <div className="flex justify-center space-x-4">
                <div className="w-10 h-10 bg-[#6c3df2]/20 rounded-full flex items-center justify-center hover:bg-[#6c3df2]/40 transition-colors cursor-pointer">
                  <div className="text-lg">in</div>
                </div>
                <div className="w-10 h-10 bg-[#6c3df2]/20 rounded-full flex items-center justify-center hover:bg-[#6c3df2]/40 transition-colors cursor-pointer">
                  <div className="text-lg">📷</div>
                </div>
                <div className="w-10 h-10 bg-[#6c3df2]/20 rounded-full flex items-center justify-center hover:bg-[#6c3df2]/40 transition-colors cursor-pointer">
                  <div className="text-lg">✉️</div>
                </div>
              </div>
            </div>

            {/* Team Card 3 */}
            <div className="bg-[#111a44]/50 rounded-xl p-6 border border-[#6c3df2]/20 hover:border-[#6c3df2]/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 hover:-translate-y-1 scroll-reveal">
              <div className="text-center mb-6">
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-[#6c3df2] to-[#ff9800] rounded-full flex items-center justify-center text-4xl">
                  👩‍💻
                </div>
                <h3 className="text-xl font-bold text-white mb-1">Sophie Johnson</h3>
                <p className="text-[#b0b8d4]">Data Analyst Mentor</p>
              </div>
              <div className="flex justify-center space-x-4">
                <div className="w-10 h-10 bg-[#6c3df2]/20 rounded-full flex items-center justify-center hover:bg-[#6c3df2]/40 transition-colors cursor-pointer">
                  <div className="text-lg">in</div>
                </div>
                <div className="w-10 h-10 bg-[#6c3df2]/20 rounded-full flex items-center justify-center hover:bg-[#6c3df2]/40 transition-colors cursor-pointer">
                  <div className="text-lg">📷</div>
                </div>
                <div className="w-10 h-10 bg-[#6c3df2]/20 rounded-full flex items-center justify-center hover:bg-[#6c3df2]/40 transition-colors cursor-pointer">
                  <div className="text-lg">✉️</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 bg-gradient-to-r from-[#6c3df2]/10 to-[#ff9800]/10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-8 scroll-reveal-left">
              <div className="text-center mb-8">
                <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-[#6c3df2] to-[#ff9800] rounded-full flex items-center justify-center text-6xl">
                  🏴‍☠️
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Club Data Pirates</h3>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#6c3df2]/20 rounded-lg flex items-center justify-center">
                    <div className="text-xl">📞</div>
                  </div>
                  <div>
                    <div className="font-semibold text-white">Phone</div>
                    <div className="text-[#b0b8d4]">+91 963539927</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#6c3df2]/20 rounded-lg flex items-center justify-center">
                    <div className="text-xl">📧</div>
                  </div>
                  <div>
                    <div className="font-semibold text-white">Email</div>
                    <div className="text-[#b0b8d4]">Data@gmail.com</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#6c3df2]/20 rounded-lg flex items-center justify-center">
                    <div className="text-xl">📍</div>
                  </div>
                  <div>
                    <div className="font-semibold text-white">Location</div>
                    <div className="text-[#b0b8d4]">2nd Lab</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-[#111a44]/50 rounded-xl p-8 border border-[#6c3df2]/20 scroll-reveal-right">
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-4 py-3 bg-white/10 border border-[#6c3df2]/30 rounded-lg text-white placeholder-[#b0b8d4] focus:outline-none focus:border-[#6c3df2] transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Class"
                    className="w-full px-4 py-3 bg-white/10 border border-[#6c3df2]/30 rounded-lg text-white placeholder-[#b0b8d4] focus:outline-none focus:border-[#6c3df2] transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Roll Number"
                    className="w-full px-4 py-3 bg-white/10 border border-[#6c3df2]/30 rounded-lg text-white placeholder-[#b0b8d4] focus:outline-none focus:border-[#6c3df2] transition-colors"
                  />
                </div>
                <Button type="submit" className="w-full bg-[#6c3df2] hover:bg-[#6c3df2]/80 text-white rounded-lg py-3 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50">
                  Contact
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0f2c] py-8 border-t border-[#6c3df2]/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white mb-4 md:mb-0">
              © Club Data Pirates
            </div>
            <div className="flex space-x-6">
              <div className="w-10 h-10 bg-[#6c3df2]/20 rounded-full flex items-center justify-center hover:bg-[#6c3df2]/40 transition-colors cursor-pointer hover:shadow-lg hover:shadow-purple-500/50">
                <div className="text-lg">▶️</div>
              </div>
              <div className="w-10 h-10 bg-[#6c3df2]/20 rounded-full flex items-center justify-center hover:bg-[#6c3df2]/40 transition-colors cursor-pointer hover:shadow-lg hover:shadow-purple-500/50">
                <div className="text-lg">f</div>
              </div>
              <div className="w-10 h-10 bg-[#6c3df2]/20 rounded-full flex items-center justify-center hover:bg-[#6c3df2]/40 transition-colors cursor-pointer hover:shadow-lg hover:shadow-purple-500/50">
                <div className="text-lg">📷</div>
              </div>
              <div className="w-10 h-10 bg-[#6c3df2]/20 rounded-full flex items-center justify-center hover:bg-[#6c3df2]/40 transition-colors cursor-pointer hover:shadow-lg hover:shadow-purple-500/50">
                <div className="text-lg">in</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}