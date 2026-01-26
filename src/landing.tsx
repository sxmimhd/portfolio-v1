import React from 'react';
import { Button } from "./components/ui/button"

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

function GothicButtonDecoration({ className, side }: { className?: string; side: 'left' | 'right' }) {
  return (
    <svg 
      className={`${className} gothic-decoration`} 
      width="40" 
      height="40" 
      viewBox="0 0 40 40"
      style={{ transform: side === 'right' ? 'scaleX(-1)' : 'none' }}
    >
      {/* Gothic cross/plus sign */}
      <path
        d="M20 5 L20 15 M15 10 L25 10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.8"
      />
      {/* Decorative flourishes */}
      <path
        d="M5 20 Q10 15 15 20 Q20 25 25 20 Q30 15 35 20"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        opacity="0.6"
      />
      {/* Small decorative dots */}
      <circle cx="10" cy="20" r="1.5" fill="currentColor" opacity="0.5" />
      <circle cx="30" cy="20" r="1.5" fill="currentColor" opacity="0.5" />
      {/* Gothic arch elements */}
      <path
        d="M8 25 Q20 30 32 25"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        opacity="0.4"
      />
    </svg>
  )
}

interface LandingProps {
  onEnterClick: () => void;
}

export default function Landing({ onEnterClick }: LandingProps) {
  return (
    <div className="min-h-screen bg-black text-stone-300 relative">
      {/* Screen edge decorative elements - truly maximized to screen */}
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

      {/* Main content container with dynamic background */}
      <div className="flex items-center justify-center min-h-screen p-4 md:p-8">
        <div className="relative w-full max-w-4xl bg-black">

        {/* Inner ornate frame */}
        <div className="relative p-8 md:p-16 pt-20 md:pt-16">
          <div className="absolute inset-0 border-2 border-stone-700/70 rounded-sm">
            <div className="absolute inset-3 border-2 border-stone-600/50 rounded-sm">
              <div className="absolute inset-2 border border-stone-600/30 rounded-sm" />
            </div>
          </div>

          {/* Content container */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center space-y-8 md:space-y-12">
          {/* Portfolio title */}
          <div className="text-center space-y-6 md:space-y-8">
            <h1 className="font-[family-name:var(--font-cinzel-decorative)] font-bold text-2xl md:text-6xl lg:text-7xl tracking-wide text-gold text-balance drop-shadow-glow">
              <div>sami Mahdadi's</div>
              <div>Portfolio</div>
            </h1>

            {/* Enter button with gothic decorations */}
            <div className="flex items-center justify-center pt-4 md:pt-8 relative">
              <GothicButtonDecoration 
                className="absolute -left-8 text-stone-600/70 hover:text-gold transition-colors duration-300" 
                side="left" 
              />
              <Button
                variant="outline"
                size="lg"
                onClick={onEnterClick}
                className="border-2 border-stone-500/80 bg-transparent hover:bg-stone-800/30 text-gold hover:text-stone-200 px-12 md:px-16 py-6 md:py-8 text-lg md:text-xl tracking-widest font-[family-name:var(--font-cinzel)] transition-all duration-300 hover:scale-105 hover:border-gold/60 hover:shadow-lg hover:shadow-gold/20"
              >
                ENTER
              </Button>
              <GothicButtonDecoration 
                className="absolute -right-8 text-stone-600/70 hover:text-gold transition-colors duration-300" 
                side="right" 
              />
            </div>
          </div>

          {/* About section */}
          <div className="text-center max-w-md md:max-w-lg space-y-10 md:space-y-10 pt-8 md:pt-16">
            <h2 className="font-[family-name:var(--font-cinzel-decorative)] font-bold text-3xl md:text-4xl lg:text-5xl text-gold tracking-wide">
              About
            </h2>
            <p className="font-[family-name:var(--font-cinzel)] text-sm md:text-base lg:text-lg leading-relaxed text-stone-400 text-balance px-4">
            Hi, I’m Sami Mahdadi, an AI-focused developer in my 20s with a passion for creating.
            <br />
            I work on AI engineering and machine learning projects, build 2D and 3D games with Unity, and develop full-stack web applications.
            <br />
            I enjoy combining problem-solving, creativity, and technology to build meaningful projects.
            </p>
          </div>
        </div>

          {/* Subtle vignette effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 pointer-events-none rounded-sm" />
        </div>
        </div>
      </div>
    </div>
  )
}
