import React, { useState } from 'react';
import { Button } from "./components/ui/button"
import ProjectCard from "./components/ProjectCard"
import ProjectModal from "./components/ProjectModal"
import { getProjectsByType, Project } from "./projectsData"

function CornerOrnament({ className, rotation = 0 }: { className?: string; rotation?: number }) {
  return (
    <svg
      className={className}
      style={{ transform: `rotate(${rotation}deg)` }}
      width="150"
      height="150"
      viewBox="0 0 150 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer frame lines */}
      <path d="M2 2 L2 60 M2 2 L60 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M5 5 L5 55 M5 5 L55 5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.6" />

      {/* Baroque scrollwork curves */}
      <path
        d="M10 10 Q10 35 35 35 Q45 35 45 45 M10 10 Q35 10 35 35 Q35 45 45 45"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Inner decorative spirals */}
      <path
        d="M20 20 Q20 30 30 30 M20 20 Q30 20 30 30"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        opacity="0.8"
      />

      {/* Flourish curves extending inward */}
      <path
        d="M50 15 Q60 20 65 30 Q68 40 70 50"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M15 50 Q20 60 30 65 Q40 68 50 70"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
      />

      {/* Decorative dots and small circles */}
      <circle cx="60" cy="60" r="4" fill="currentColor" opacity="0.5" />
      <circle cx="75" cy="75" r="2.5" fill="currentColor" opacity="0.4" />
      <circle cx="45" cy="45" r="2" fill="currentColor" opacity="0.6" />

      {/* Additional ornate curves */}
      <path d="M55 65 Q60 70 65 65 Q70 60 75 65" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.5" />
      <path d="M65 55 Q70 60 65 65 Q60 70 65 75" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.5" />

      {/* Leaf-like decorative elements */}
      <path
        d="M80 40 Q85 45 80 50 Q75 45 80 40"
        stroke="currentColor"
        strokeWidth="0.7"
        fill="currentColor"
        opacity="0.3"
      />
      <path
        d="M40 80 Q45 85 40 90 Q35 85 40 80"
        stroke="currentColor"
        strokeWidth="0.7"
        fill="currentColor"
        opacity="0.3"
      />
    </svg>
  )
}

function BorderDecoration({ className }: { className?: string }) {
  return (
    <svg className={className} width="100%" height="60" viewBox="0 0 600 60" preserveAspectRatio="none">
      {/* Main flowing curve */}
      <path
        d="M0 30 Q75 15 150 30 T300 30 T450 30 T600 30"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        opacity="0.5"
      />
      {/* Secondary curve */}
      <path
        d="M0 35 Q75 20 150 35 T300 35 T450 35 T600 35"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        opacity="0.4"
      />
      {/* Decorative wave pattern */}
      <path
        d="M0 25 Q75 10 150 25 T300 25 T450 25 T600 25"
        stroke="currentColor"
        strokeWidth="0.8"
        fill="none"
        opacity="0.3"
      />
      {/* Small ornamental dots */}
      <circle cx="150" cy="30" r="2" fill="currentColor" opacity="0.4" />
      <circle cx="300" cy="30" r="2" fill="currentColor" opacity="0.4" />
      <circle cx="450" cy="30" r="2" fill="currentColor" opacity="0.4" />
    </svg>
  )
}

function SideBorderDecoration({ className }: { className?: string }) {
  return (
    <svg className={className} width="60" height="100%" viewBox="0 0 60 600" preserveAspectRatio="none">
      <path
        d="M30 0 Q15 75 30 150 T30 300 T30 450 T30 600"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        opacity="0.5"
      />
      <path
        d="M35 0 Q20 75 35 150 T35 300 T35 450 T35 600"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        opacity="0.4"
      />
      <circle cx="30" cy="150" r="2" fill="currentColor" opacity="0.4" />
      <circle cx="30" cy="300" r="2" fill="currentColor" opacity="0.4" />
      <circle cx="30" cy="450" r="2" fill="currentColor" opacity="0.4" />
    </svg>
  )
}

function CrossedSwords({ className }: { className?: string }) {
  return (
    <svg className={className} width="200" height="200" viewBox="0 0 200 200" fill="none">
      {/* First sword */}
      <path
        d="M50 30 L50 170 M45 30 L55 30 M45 170 L55 170"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Sword guard */}
      <path
        d="M40 80 L60 80 M40 90 L60 90"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Sword handle */}
      <path
        d="M47 170 L53 170 M47 180 L53 180 M47 190 L53 190"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      
      {/* Second sword (crossed) */}
      <path
        d="M150 30 L150 170 M145 30 L155 30 M145 170 L155 170"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        transform="rotate(45 100 100)"
      />
      {/* Second sword guard */}
      <path
        d="M140 80 L160 80 M140 90 L160 90"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        transform="rotate(45 100 100)"
      />
      {/* Second sword handle */}
      <path
        d="M147 170 L153 170 M147 180 L153 180 M147 190 L153 190"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        transform="rotate(45 100 100)"
      />
      
      {/* Decorative elements */}
      <circle cx="100" cy="100" r="8" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.6" />
      <circle cx="100" cy="100" r="4" fill="currentColor" opacity="0.4" />
    </svg>
  )
}

function SimpleGothicBorder({ className }: { className?: string }) {
  return (
    <svg className={className} width="100%" height="100%" viewBox="0 0 800 80" preserveAspectRatio="none">
      {/* Simple outer border - matching gothic decoration color */}
      <rect x="2" y="2" width="796" height="76" rx="6" ry="6" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.8" />
      
      {/* Simple inner border */}
      <rect x="6" y="6" width="788" height="68" rx="4" ry="4" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.6" />
      
      {/* Simple corner accents */}
      <path d="M8 8 L8 16 M8 8 L16 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
      <path d="M792 8 L792 16 M792 8 L784 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
      <path d="M8 72 L8 64 M8 72 L16 72" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
      <path d="M792 72 L792 64 M792 72 L784 72" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
    </svg>
  )
}

export default function MainPage() {
  const [activeTab, setActiveTab] = useState<'AI Projects' | 'Games' | 'Web Projects'>('AI Projects');
  const [selected, setSelected] = useState<Project | null>(null)
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleProjectClick = (project: Project) => {
    setSelected(project)
  };

  const getCategoryDescription = (category: string) => {
    switch (category) {
      case 'AI Projects':
        return 'My AI projects,\n Cutting-edge ML and AI craftsmanship.';
      case 'Games':
        return 'My games, 2D/3D Unity,\n Immersive gameplay and creative stories.';
      case 'Web Projects':
        return 'My web projects,\n Modern, responsive, and performance-focused.';
      default:
        return 'Explore my collection of projects. Each project represents a journey of innovation and craftsmanship.';
    }
  };

  return (
    <div className="min-h-screen bg-black text-stone-300 relative">
      {/* Screen edge decorative elements - maximized to screen */}
      <CornerOrnament
        className="fixed top-0 left-0 text-stone-600/80 w-24 h-24 md:w-36 md:h-36 lg:w-40 lg:h-40 z-10"
        rotation={0}
      />
      <CornerOrnament
        className="fixed top-0 right-0 text-stone-600/80 w-24 h-24 md:w-36 md:h-36 lg:w-40 lg:h-40 z-10"
        rotation={90}
      />
      <CornerOrnament
        className="fixed bottom-0 left-0 text-stone-600/80 w-24 h-24 md:w-36 md:h-36 lg:w-40 lg:h-40 z-10"
        rotation={270}
      />
      <CornerOrnament
        className="fixed bottom-0 right-0 text-stone-600/80 w-24 h-24 md:w-36 md:h-36 lg:w-40 lg:h-40 z-10"
        rotation={180}
      />

      <BorderDecoration className="fixed top-0 left-1/4 w-1/2 text-stone-600/60 z-10" />
      <BorderDecoration className="fixed bottom-0 left-1/4 w-1/2 text-stone-600/60 rotate-180 z-10" />

      <SideBorderDecoration className="fixed left-0 top-1/4 h-1/2 text-stone-600/60 z-10" />
      <SideBorderDecoration className="fixed right-0 top-1/4 h-1/2 text-stone-600/60 scale-x-[-1] z-10" />

      {/* Fixed Gothic Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-30">
        <div className="flex items-center justify-center">
          <div className="relative bg-black/95 backdrop-blur-sm mx-4 mt-4 rounded-lg overflow-hidden">
            {/* Simple Gothic Border */}
            <SimpleGothicBorder className="absolute inset-0 w-full h-full text-stone-600/80" />
            
            <div className="relative px-6 py-3">
              <div className="flex items-center justify-between">
                {/* Logo + Mobile Toggle */}
                <div className="flex items-center flex-shrink-0">
                  <h1 className="font-[family-name:var(--font-unifraktur)] text-xl text-gold-dark tracking-wide">
                    sami Mahdadi
                  </h1>
                  <button
                    className="md:hidden ml-3 text-gold-dark bg-gold-muted p-2 border border-gold-dark rounded-sm"
                    onClick={() => setIsMobileMenuOpen(v => !v)}
                    aria-label="Toggle Navigation"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3" y="6" width="18" height="2" fill="currentColor"/>
                      <rect x="3" y="11" width="18" height="2" fill="currentColor"/>
                      <rect x="3" y="16" width="18" height="2" fill="currentColor"/>
                    </svg>
                  </button>
                </div>
                
                {/* Navigation Links */}
                {/* Desktop Nav */}
                <div className="hidden md:flex">
                  <div className="ml-8 flex items-baseline space-x-3">
                    <button 
                      onClick={() => setActiveTab('AI Projects')}
                      className={`px-4 py-2 text-sm font-[family-name:var(--font-cinzel)] transition-colors duration-300 border rounded-sm ${
                        activeTab === 'AI Projects'
                          ? 'text-black bg-gold-dark border-gold-dark'
                          : 'text-gold-dark bg-gold-muted hover:text-black border-gold-dark'
                      }`}
                    >
                      AI Projects
                    </button>
                    <button 
                      onClick={() => setActiveTab('Games')}
                      className={`px-4 py-2 text-sm font-[family-name:var(--font-cinzel)] transition-colors duration-300 border rounded-sm ${
                        activeTab === 'Games'
                          ? 'text-black bg-gold-dark border-gold-dark'
                          : 'text-gold-dark bg-gold-muted hover:text-black border-gold-dark'
                      }`}
                    >
                      Games
                    </button>
                    <button 
                      onClick={() => setActiveTab('Web Projects')}
                      className={`px-4 py-2 text-sm font-[family-name:var(--font-cinzel)] transition-colors duration-300 border rounded-sm ${
                        activeTab === 'Web Projects'
                          ? 'text-black bg-gold-dark border-gold-dark'
                          : 'text-gold-dark bg-gold-muted hover:text-black border-gold-dark'
                      }`}
                    >
                      Web Projects
                    </button>
                    <button onClick={() => setIsContactOpen(true)} className="text-gold-dark bg-gold-muted hover:text-black px-4 py-2 text-sm font-[family-name:var(--font-cinzel)] transition-colors duration-300 border border-gold-dark rounded-sm">
                      Contact
                    </button>
                  </div>
                </div>

                {/* Mobile Nav Toggle moved next to logo */}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Nav Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden flex items-center justify-center">
          <div className="absolute inset-0 bg-black/70 backdrop" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="relative mx-4 bg-black/95 rounded-lg border border-gold-dark p-4 shadow-xl">
            <div className="flex flex-col space-y-3">
              {(['AI Projects','Games','Web Projects'] as const).map(tab => (
                <button
                  key={tab}
                  onClick={() => { setActiveTab(tab); setIsMobileMenuOpen(false); }}
                  className={`w-40 self-center text-center px-4 py-2 text-sm font-[family-name:var(--font-cinzel)] transition-colors duration-300 border rounded-sm ${activeTab === tab ? 'text-black bg-gold-dark border-gold-dark' : 'text-gold-dark bg-gold-muted hover:text-black border-gold-dark'}`}
                >
                  {tab}
                </button>
              ))}
              <button onClick={() => { setIsContactOpen(true); setIsMobileMenuOpen(false); }} className="w-40 self-center text-center text-gold-dark bg-gold-muted hover:text-black px-4 py-2 text-sm font-[family-name:var(--font-cinzel)] transition-colors duration-300 border border-gold-dark rounded-sm">
                Contact
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main content container */}
      <div className="flex items-center justify-center min-h-screen p-4 md:p-8 pt-20">
        <div className="relative w-full max-w-4xl bg-black">

          {/* Hero Section */}
          <div className="relative p-8 md:p-16 pt-8 md:pt-8">
            <div className="absolute inset-0 border-2 border-stone-700/70 rounded-sm">
              <div className="absolute inset-3 border-2 border-stone-600/50 rounded-sm">
                <div className="absolute inset-2 border border-stone-600/30 rounded-sm" />
              </div>
            </div>

            {/* Hero Content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center space-y-6 md:space-y-8">
              {/* Crossed Swords Image */}
              <div className="flex justify-center mb-0 mt-0 translate-y-12">
                <img 
                  src="/crossedswords.png" 
                  alt="Crossed Swords" 
                  className="w-24 h-28 md:w-28 md:h-28 object-contain opacity-80"
                />
              </div>

              {/* Welcome Text */}
              <div className="text-center space-y-6 md:space-y-8">
                <h1 className="font-[family-name:var(--font-unifraktur)] font-normal text-4xl md:text-6xl lg:text-7xl tracking-wide text-gold text-balance drop-shadow-glow">
                  <div>Welcome to</div>
                  <div>My Portfolio</div>
                </h1>
                
                <p className="font-[family-name:var(--font-cinzel)] text-lg md:text-xl lg:text-2xl leading-relaxed text-stone-400 text-balance px-4 max-w-2xl mx-auto">
                  Explore my collection of AI projects, games, and websites. 
                  Each creation tells a story of innovation and craftsmanship.
                </p>
              </div>
            </div>

            {/* Subtle vignette effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 pointer-events-none rounded-sm" />
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="py-16 px-4 md:px-8 pb-24">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-cinzel-decorative)] text-3xl md:text-4xl lg:text-5xl text-gold mb-4">
              {activeTab}
            </h2>
            <p className="font-[family-name:var(--font-cinzel)] text-lg text-stone-400 max-w-2xl mx-auto whitespace-pre-line text-center">
              {getCategoryDescription(activeTab)}
            </p>
          </div>


          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {getProjectsByType(activeTab).map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={handleProjectClick}
              />
            ))}
          </div>

          {/* No projects message */}
          {getProjectsByType(activeTab).length === 0 && (
            <div className="text-center py-12">
              <p className="text-stone-500 font-[family-name:var(--font-cinzel)]">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      <ProjectModal project={selected} isOpen={!!selected} onClose={() => setSelected(null)} />

      {/* Contact Popup */}
      {isContactOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-auto">
          <div className="absolute inset-0 bg-black/70 backdrop" onClick={() => setIsContactOpen(false)} />
          <div className="relative w-full max-w-md bg-black/85 rounded-md overflow-hidden shadow-xl animate-fade-in mx-4">
            {/* Borders */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 border-2 border-gold-dark rounded-md" />
              <div className="absolute inset-2 border border-gold-dark rounded-md" />
            </div>
            {/* Close */}
            <button type="button" className="absolute top-2 right-2 z-50 text-black bg-gold-dark hover:bg-[#c4a56f] hover:text-black text-2xl leading-none px-3 py-1 rounded-sm border border-gold-dark" onClick={() => setIsContactOpen(false)} aria-label="Close">×</button>
            <div className="p-6 space-y-4">
              <h3 className="font-[family-name:var(--font-cinzel-decorative)] text-gold-dark text-2xl">Contact</h3>
              <div className="font-[family-name:var(--font-cinzel)] text-gold-dark space-y-3">
                <div>
                  <span className="opacity-80 text-stone-300">Gmail: </span>
                  <a href="mailto:samym@gmail.com" className="text-stone-300 hover:text-[#c4a56f]">samymahdadi@gmail.com</a>
                </div>
                
                <div>
                  <span className="opacity-80 text-stone-300">GitHub: </span>
                  <a href="https://github.com/mahdadisami" target="_blank" rel="noreferrer" className="text-stone-300 hover:text-[#c4a56f]">github.com/mahdadisami</a>
                </div>
                <div>
                  <span className="opacity-80 text-stone-300">LinkedIn: </span>
                  <a href="https://www.linkedin.com/in/samimahdadi/" target="_blank" rel="noreferrer" className="text-stone-300 hover:text-[#c4a56f]">linkedin.com/in/samimahdadi</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
