import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function ContactPage() {
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

      {/* Contact Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
            <p className="text-lg text-blue-200 max-w-2xl mx-auto">
              Get in touch with our team to learn more about joining the Data Pirates
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="bg-blue-700/50 border-blue-600 text-white">
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
                <CardDescription className="text-blue-200">
                  Fill out the form below and we'll get back to you soon
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" className="bg-blue-800/50 border-blue-600 text-white placeholder-blue-300" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" className="bg-blue-800/50 border-blue-600 text-white placeholder-blue-300" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="How can we help?" className="bg-blue-800/50 border-blue-600 text-white placeholder-blue-300" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Your message..." className="bg-blue-800/50 border-blue-600 text-white placeholder-blue-300" rows={4} />
                </div>
                <Button className="w-full bg-white text-blue-900 hover:bg-blue-100">
                  Send Message
                </Button>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center">
                      📞
                    </div>
                    <div>
                      <div className="font-semibold">Phone</div>
                      <div className="text-blue-200">+1 (555) 123-4567</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center">
                      📧
                    </div>
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-blue-200">info@datapirates.com</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center">
                      📍
                    </div>
                    <div>
                      <div className="font-semibold">Address</div>
                      <div className="text-blue-200">123 Innovation Drive, Tech City, TC 12345</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Follow Us</h3>
                <div className="flex space-x-4">
                  <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center hover:bg-blue-600 cursor-pointer transition-colors">
                    📘
                  </div>
                  <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center hover:bg-blue-600 cursor-pointer transition-colors">
                    🐦
                  </div>
                  <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center hover:bg-blue-600 cursor-pointer transition-colors">
                    📷
                  </div>
                  <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center hover:bg-blue-600 cursor-pointer transition-colors">
                    💼
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Office Hours</h3>
                <div className="bg-blue-700/50 rounded-lg p-4">
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">Monday - Friday</span>
                    <span className="text-blue-200">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Saturday</span>
                    <span className="text-blue-200">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between mt-2">
                    <span className="font-semibold">Sunday</span>
                    <span className="text-blue-200">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-20">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Find Us</h2>
            <div className="bg-blue-700/50 rounded-2xl h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🗺️</div>
                <p className="text-blue-200">Interactive Map Coming Soon</p>
                <p className="text-blue-300 text-sm mt-2">123 Innovation Drive, Tech City, TC 12345</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}