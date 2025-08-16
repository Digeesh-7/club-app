import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
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

      {/* About Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h1 className="text-4xl md:text-5xl font-bold">About Us - What We Do</h1>
            <p className="text-lg text-blue-200 max-w-3xl mx-auto">
              We are a team of data-driven professionals providing innovative solutions through analytics, 
              research, and creative problem-solving approaches.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center flex-shrink-0">
                  📊
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Data Analysis</h3>
                  <p className="text-blue-200">Comprehensive data analysis and insights to drive informed decision-making.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center flex-shrink-0">
                  🎯
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Project Solutions</h3>
                  <p className="text-blue-200">End-to-end project management and innovative solution development.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center flex-shrink-0">
                  🚀
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Creative Strategy</h3>
                  <p className="text-blue-200">Strategic planning and creative approaches to complex challenges.</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-blue-700 to-blue-500 rounded-xl overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-6xl">
                  👥
                </div>
              </div>
            </div>
          </div>

          {/* Our Story Section */}
          <div className="mt-20">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Our Story</h2>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <Card className="bg-blue-700/50 border-blue-600 text-white">
                <CardHeader>
                  <CardTitle className="text-2xl">The Journey of Data Pirates</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-blue-200 leading-relaxed">
                    Founded in 2010, Data Pirates emerged from a simple idea: that data could be the key to unlocking 
                    unprecedented business value. What started as a small group of passionate data enthusiasts has grown 
                    into a formidable team of professionals serving clients worldwide.
                  </p>
                  <p className="text-blue-200 leading-relaxed">
                    Our name "Data Pirates" reflects our approach - we're not afraid to venture into uncharted waters, 
                    challenge conventional wisdom, and discover hidden treasures in data that others might miss. We pride 
                    ourselves on our adventurous spirit and commitment to excellence.
                  </p>
                  <p className="text-blue-200 leading-relaxed">
                    Today, we continue to push boundaries, embrace new technologies, and deliver innovative solutions 
                    that help our clients navigate the complex world of data and make smarter decisions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}