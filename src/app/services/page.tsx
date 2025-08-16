import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ServicesPage() {
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

      {/* Services Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h1 className="text-4xl md:text-5xl font-bold">Our Services</h1>
            <p className="text-lg text-blue-200 max-w-3xl mx-auto">
              Discover our comprehensive range of data-driven solutions designed to help your business thrive in the digital age
            </p>
          </div>

          {/* Main Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <Card className="bg-blue-700/50 border-blue-600 text-white h-full">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-4 text-2xl">
                  📊
                </div>
                <CardTitle>Data Analysis</CardTitle>
                <CardDescription className="text-blue-200">
                  Transform raw data into actionable insights
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-blue-200">
                  <li>• Statistical Analysis</li>
                  <li>• Data Visualization</li>
                  <li>• Predictive Modeling</li>
                  <li>• Business Intelligence</li>
                </ul>
                <Button className="w-full mt-4 bg-white text-blue-900 hover:bg-blue-100">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-blue-700/50 border-blue-600 text-white h-full">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-4 text-2xl">
                  🎯
                </div>
                <CardTitle>Project Solutions</CardTitle>
                <CardDescription className="text-blue-200">
                  End-to-end project management and execution
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-blue-200">
                  <li>• Project Planning</li>
                  <li>• Resource Management</li>
                  <li>• Risk Assessment</li>
                  <li>• Quality Assurance</li>
                </ul>
                <Button className="w-full mt-4 bg-white text-blue-900 hover:bg-blue-100">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-blue-700/50 border-blue-600 text-white h-full">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-4 text-2xl">
                  🚀
                </div>
                <CardTitle>Creative Strategy</CardTitle>
                <CardDescription className="text-blue-200">
                  Innovative approaches to complex challenges
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-blue-200">
                  <li>• Strategic Planning</li>
                  <li>• Creative Problem Solving</li>
                  <li>• Innovation Workshops</li>
                  <li>• Design Thinking</li>
                </ul>
                <Button className="w-full mt-4 bg-white text-blue-900 hover:bg-blue-100">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-blue-700/50 border-blue-600 text-white h-full">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-4 text-2xl">
                  🤖
                </div>
                <CardTitle>AI & Machine Learning</CardTitle>
                <CardDescription className="text-blue-200">
                  Cutting-edge AI solutions for your business
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-blue-200">
                  <li>• ML Model Development</li>
                  <li>• Natural Language Processing</li>
                  <li>• Computer Vision</li>
                  <li>• Automation Solutions</li>
                </ul>
                <Button className="w-full mt-4 bg-white text-blue-900 hover:bg-blue-100">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-blue-700/50 border-blue-600 text-white h-full">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-4 text-2xl">
                  📱
                </div>
                <CardTitle>Web Development</CardTitle>
                <CardDescription className="text-blue-200">
                  Modern web applications and platforms
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-blue-200">
                  <li>• Frontend Development</li>
                  <li>• Backend Systems</li>
                  <li>• Mobile Apps</li>
                  <li>• API Development</li>
                </ul>
                <Button className="w-full mt-4 bg-white text-blue-900 hover:bg-blue-100">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-blue-700/50 border-blue-600 text-white h-full">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-4 text-2xl">
                  🎓
                </div>
                <CardTitle>Training & Consulting</CardTitle>
                <CardDescription className="text-blue-200">
                  Empower your team with expert knowledge
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-blue-200">
                  <li>• Technical Training</li>
                  <li>• Business Consulting</li>
                  <li>• Workshops & Seminars</li>
                  <li>• Mentorship Programs</li>
                </ul>
                <Button className="w-full mt-4 bg-white text-blue-900 hover:bg-blue-100">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Process Section */}
          <div className="bg-blue-800/50 rounded-2xl p-8 mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-2">Discovery</h3>
                <p className="text-blue-200">Understanding your needs and goals</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-2">Strategy</h3>
                <p className="text-blue-200">Developing a comprehensive plan</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-2">Implementation</h3>
                <p className="text-blue-200">Executing with precision and expertise</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  4
                </div>
                <h3 className="text-xl font-semibold mb-2">Support</h3>
                <p className="text-blue-200">Ongoing maintenance and optimization</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-blue-200 mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help transform your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-100 px-8">
                Get a Quote
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-900 px-8">
                Schedule a Call
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}