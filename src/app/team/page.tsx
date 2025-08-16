import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <div className="text-2xl font-bold">Data Pirates</div>
            <div className="hidden md:flex space-x-6">
              <a href="/" className="hover:text-blue-300 transition-colors">Home</a>
              <a href="/about" className="hover:text-blue-300 transition-colors">About us</a>
              <a href="/services" className="hover:text-blue-300 transition-colors">Services</a>
              <a href="/team" className="hover:text-blue-300 transition-colors">Team</a>
              <a href="/contact" className="hover:text-blue-300 transition-colors">Contact</a>
            </div>
          </div>
          <button className="bg-transparent border border-white text-white px-4 py-2 rounded-lg hover:bg-white hover:text-blue-900 transition-colors">
            Admin Login
          </button>
        </div>
      </nav>

      {/* Meet Our Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h1 className="text-4xl md:text-5xl font-bold">Meet Our Team</h1>
            <p className="text-lg text-blue-200 max-w-2xl mx-auto">
              Our experienced mentors and team members are here to guide you to success
            </p>
          </div>

          {/* Leadership Team */}
          <div className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Leadership Team</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-blue-700/50 border-blue-600 text-white">
                <CardHeader className="text-center">
                  <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                    👨‍💼
                  </div>
                  <CardTitle>Adolf Stalin</CardTitle>
                  <CardDescription className="text-blue-200">UX Specialist Mentor</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-200 text-center">
                    Expert in user experience design with 15+ years of industry experience.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-blue-700/50 border-blue-600 text-white">
                <CardHeader className="text-center">
                  <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                    👩‍💻
                  </div>
                  <CardTitle>Sarah Johnson</CardTitle>
                  <CardDescription className="text-blue-200">Data Science Lead</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-200 text-center">
                    Specializes in machine learning and predictive analytics solutions.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-blue-700/50 border-blue-600 text-white">
                <CardHeader className="text-center">
                  <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                    👨‍🎨
                  </div>
                  <CardTitle>Mike Chen</CardTitle>
                  <CardDescription className="text-blue-200">Creative Director</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-200 text-center">
                    Brings creative vision and innovative design thinking to every project.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Senior Team Members */}
          <div className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Senior Team Members</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-blue-700/50 border-blue-600 text-white">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 text-2xl">
                    👩‍🔬
                  </div>
                  <CardTitle className="text-lg">Dr. Lisa Wang</CardTitle>
                  <CardDescription className="text-blue-200 text-sm">Research Director</CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-blue-700/50 border-blue-600 text-white">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 text-2xl">
                    👨‍💻
                  </div>
                  <CardTitle className="text-lg">James Rodriguez</CardTitle>
                  <CardDescription className="text-blue-200 text-sm">Tech Lead</CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-blue-700/50 border-blue-600 text-white">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 text-2xl">
                    👩‍💼
                  </div>
                  <CardTitle className="text-lg">Emily Davis</CardTitle>
                  <CardDescription className="text-blue-200 text-sm">Project Manager</CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-blue-700/50 border-blue-600 text-white">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 text-2xl">
                    👨‍🎯
                  </div>
                  <CardTitle className="text-lg">Alex Thompson</CardTitle>
                  <CardDescription className="text-blue-200 text-sm">Strategy Lead</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>

          {/* Team Stats */}
          <div className="bg-blue-800/50 rounded-2xl p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Team Excellence</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-white">25+</div>
                <div className="text-blue-200">Team Members</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-blue-200">Years Combined Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">200+</div>
                <div className="text-blue-200">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">15+</div>
                <div className="text-blue-200">Industry Certifications</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}