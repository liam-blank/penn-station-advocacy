import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Separator } from '@/components/ui/separator.jsx'
import { 
  ArrowRight, 
  Train, 
  DollarSign, 
  Users, 
  Clock, 
  CheckCircle, 
  AlertTriangle,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  ChevronDown,
  Menu,
  X
} from 'lucide-react'
import './App.css'

// Import images
import heroChaos from './assets/hero_current_chaos.png'
import heroVision from './assets/hero_future_vision.png'
import throughRunningDiagram from './assets/through_running_diagram.png'
import throughRunningConcept from './assets/through_running_concept.png'
import costComparison from './assets/cost_comparison.png'
import capacityComparison from './assets/capacity_comparison.png'
import pennTimeline from './assets/penn_timeline.png'
import crossrailStation from './assets/crossrail_station.jpg'
import rerParisStation from './assets/rer_paris_station.jpg'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'problem', 'solution', 'evidence', 'vision', 'action']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const NavLink = ({ href, children, isActive }) => (
    <button
      onClick={() => scrollToSection(href)}
      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
        isActive 
          ? 'bg-blue-600 text-white' 
          : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
      }`}
    >
      {children}
    </button>
  )

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Train className="h-8 w-8 text-blue-600 mr-2" />
              <span className="font-bold text-xl text-gray-900">Penn Station Through-Running</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              <NavLink href="home" isActive={activeSection === 'home'}>Home</NavLink>
              <NavLink href="problem" isActive={activeSection === 'problem'}>The Problem</NavLink>
              <NavLink href="solution" isActive={activeSection === 'solution'}>The Solution</NavLink>
              <NavLink href="evidence" isActive={activeSection === 'evidence'}>Evidence</NavLink>
              <NavLink href="vision" isActive={activeSection === 'vision'}>Vision</NavLink>
              <NavLink href="action" isActive={activeSection === 'action'}>Take Action</NavLink>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-700 hover:text-blue-600"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-2">
                <NavLink href="home" isActive={activeSection === 'home'}>Home</NavLink>
                <NavLink href="problem" isActive={activeSection === 'problem'}>The Problem</NavLink>
                <NavLink href="solution" isActive={activeSection === 'solution'}>The Solution</NavLink>
                <NavLink href="evidence" isActive={activeSection === 'evidence'}>Evidence</NavLink>
                <NavLink href="vision" isActive={activeSection === 'vision'}>Vision</NavLink>
                <NavLink href="action" isActive={activeSection === 'action'}>Take Action</NavLink>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-red-100 text-red-800 border-red-200">
                Urgent: $17 Billion at Stake
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                A Better Penn Station is Possible.{' '}
                <span className="text-blue-600">And It Doesn't Cost $17 Billion.</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Through-running can double Penn Station's capacity, improve passenger experience, 
                and save taxpayers billions—all without massive construction disruption.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700"
                  onClick={() => scrollToSection('action')}
                >
                  Demand an Independent Review
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => scrollToSection('solution')}
                >
                  Learn About Through-Running
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-1 gap-4">
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img 
                    src={heroChaos} 
                    alt="Current Penn Station chaos" 
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-end">
                    <div className="p-4 text-white">
                      <p className="font-semibold">Current Reality</p>
                      <p className="text-sm opacity-90">Overcrowded, chaotic, inefficient</p>
                    </div>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img 
                    src={heroVision} 
                    alt="Future Penn Station vision" 
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-blue-600/40 flex items-end">
                    <div className="p-4 text-white">
                      <p className="font-semibold">Possible Future</p>
                      <p className="text-sm opacity-90">Spacious, efficient, world-class</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              A Station at Breaking Point
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Penn Station serves over 650,000 passengers daily, yet the current $16.7 billion expansion plan 
              is based on flawed analysis and ignores proven alternatives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-red-500 mx-auto mb-2" />
                <CardTitle className="text-2xl">650,000+</CardTitle>
                <CardDescription>Daily passengers</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <DollarSign className="h-12 w-12 text-red-500 mx-auto mb-2" />
                <CardTitle className="text-2xl">$16.7B</CardTitle>
                <CardDescription>Proposed expansion cost</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Clock className="h-12 w-12 text-red-500 mx-auto mb-2" />
                <CardTitle className="text-2xl">10+ Years</CardTitle>
                <CardDescription>Construction disruption</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <AlertTriangle className="h-12 w-12 text-red-500 mx-auto mb-2" />
                <CardTitle className="text-2xl">Biased</CardTitle>
                <CardDescription>Feasibility study</CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                The Flawed Expansion Plan
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <AlertTriangle className="h-6 w-6 text-red-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Astronomical Cost</h4>
                    <p className="text-gray-600">$16.7 billion for expansion vs. $2-3 billion for through-running</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <AlertTriangle className="h-6 w-6 text-red-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Community Disruption</h4>
                    <p className="text-gray-600">Demolition of Block 780 displaces businesses and residents</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <AlertTriangle className="h-6 w-6 text-red-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Biased Analysis</h4>
                    <p className="text-gray-600">Study conducted by firms with financial conflicts of interest</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src={costComparison} 
                alt="Cost comparison chart" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Power of Through-Running
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven rail operation method that can double capacity while improving passenger experience 
              and reducing costs—successfully implemented in major cities worldwide.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src={throughRunningDiagram} 
                alt="Through-running concept diagram" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                How Through-Running Works
              </h3>
              <p className="text-gray-600 mb-6">
                Instead of trains arriving at Penn Station and reversing direction, trains continue through 
                the station to destinations across the region. A train from New Jersey could continue through 
                Penn Station to Long Island, while a Long Island train could continue to New Jersey.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Eliminates terminal bottlenecks</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Reduces train dwell times</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Provides direct cross-regional connections</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Doubles effective capacity</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <DollarSign className="h-6 w-6 text-green-500 mr-2" />
                  85% Cost Savings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Through-running costs $2-3 billion compared to $16.7 billion for expansion
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-6 w-6 text-blue-500 mr-2" />
                  Doubled Capacity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Can handle twice as many trains per hour through operational efficiency
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="h-6 w-6 text-purple-500 mr-2" />
                  Faster Implementation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Minimal construction disruption compared to decade-long expansion project
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Global Success Stories */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Proven Success Worldwide
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <img 
                    src={crossrailStation} 
                    alt="London Crossrail station" 
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <CardTitle>London Crossrail/Elizabeth Line</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    London's newest rail line demonstrates the transformative power of through-running. 
                    By connecting existing suburban lines through a new central tunnel, Crossrail dramatically 
                    increased capacity and improved passenger experience across the metropolitan area.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <img 
                    src={rerParisStation} 
                    alt="Paris RER station" 
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <CardTitle>Paris RER System</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    The RER has served as the backbone of Paris regional transportation for decades. 
                    Through-running operations move millions of passengers daily across the metropolitan 
                    area with high frequency and reliability.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Evidence Section */}
      <section id="evidence" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Evidence is Clear
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Independent analysis shows through-running is not only feasible but superior to the proposed expansion.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Capacity Comparison
              </h3>
              <p className="text-gray-600 mb-6">
                Through-running can effectively double Penn Station's capacity by eliminating the inefficiencies 
                of terminal operations. Trains spend less time in the station and platforms are used more efficiently.
              </p>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-red-50 rounded-lg">
                  <span className="font-semibold text-red-800">Current Terminal Operation</span>
                  <span className="text-2xl font-bold text-red-600">100%</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                  <span className="font-semibold text-green-800">Through-Running Operation</span>
                  <span className="text-2xl font-bold text-green-600">200%</span>
                </div>
              </div>
            </div>
            <div>
              <img 
                src={capacityComparison} 
                alt="Capacity comparison chart" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-12">
            <div className="flex items-start">
              <AlertTriangle className="h-6 w-6 text-yellow-600 mt-1 mr-3 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-yellow-800 mb-2">
                  The October 2024 Study Was Biased
                </h4>
                <p className="text-yellow-700">
                  The feasibility study dismissing through-running was conducted by WSP/FXC, engineering firms 
                  with financial stakes in the expansion project. The study used predetermined assumptions that 
                  favored expansion and was never subjected to independent review.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Project Timeline & Decision Points
            </h3>
            <img 
              src={pennTimeline} 
              alt="Penn Station project timeline" 
              className="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              A 21st Century Penn Station
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Imagine a Penn Station that works for everyone—efficient, spacious, and connected to the entire region.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={throughRunningConcept} 
                alt="Through-running concept visualization" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                The Through-Running Advantage
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Simplified Operations</h4>
                  <p className="text-gray-600">
                    Trains flow through the station without complex reversing maneuvers, reducing delays 
                    and improving reliability for all passengers.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Regional Connectivity</h4>
                  <p className="text-gray-600">
                    Direct connections between New Jersey, Manhattan, Long Island, and Queens without 
                    requiring transfers at Penn Station.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Future-Ready Infrastructure</h4>
                  <p className="text-gray-600">
                    A flexible system that can adapt to changing transportation needs and integrate 
                    with future regional rail improvements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Action Section */}
      <section id="action" className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Take Action Now
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Penn Station's future affects millions of commuters and billions in taxpayer dollars. 
              Your voice matters in demanding a fair, independent review of all alternatives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="bg-white text-gray-900">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="h-6 w-6 text-blue-600 mr-2" />
                  Contact Officials
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Demand the Federal Railroad Administration conduct an independent review of through-running.
                </p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Find Your Representatives
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white text-gray-900">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-6 w-6 text-blue-600 mr-2" />
                  Sign the Petition
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Join thousands demanding an unbiased technical analysis of through-running alternatives.
                </p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Sign Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white text-gray-900">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <ExternalLink className="h-6 w-6 text-blue-600 mr-2" />
                  Share & Spread
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Help educate others about this critical issue affecting our transportation future.
                </p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Share on Social Media
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="bg-blue-700 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">
              Key Messages for Officials
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
              <div>
                <h4 className="font-semibold mb-2">Fiscal Responsibility</h4>
                <p className="text-blue-100">Taxpayers deserve the most cost-effective solution</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Technical Objectivity</h4>
                <p className="text-blue-100">All alternatives must receive fair, independent analysis</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Proven Solutions</h4>
                <p className="text-blue-100">Through-running works in major cities worldwide</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Environmental Impact</h4>
                <p className="text-blue-100">Less disruptive construction benefits communities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Train className="h-8 w-8 text-blue-400 mr-2" />
                <span className="font-bold text-xl">Penn Station Through-Running</span>
              </div>
              <p className="text-gray-400">
                Advocating for a comprehensive, independent review of through-running operations 
                at Penn Station as a cost-effective, proven alternative to massive expansion.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  <span>info@pennstationthroughrunning.org</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>(555) 123-PENN</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>New York, NY</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Technical Reports
                </a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Media Kit
                </a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Coalition Partners
                </a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Press Releases
                </a>
              </div>
            </div>
          </div>
          <Separator className="my-8 bg-gray-700" />
          <div className="text-center text-gray-400">
            <p>&copy; 2025 Penn Station Through-Running Campaign. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
