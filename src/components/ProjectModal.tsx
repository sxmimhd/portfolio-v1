import React, { useEffect, useMemo, useState } from 'react'
import { Project } from '../projectsData'

interface ProjectModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const images = useMemo(() => {
    if (!project) return [] as string[]
    if (project.media && project.media.length > 0) return project.media
    return [project.image, project.image, project.image, project.image, project.image]
  }, [project])

  const isVideo = (src: string) => /\.(mp4|webm|ogg)(\?.*)?$/i.test(src)

  const [index, setIndex] = useState(0)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  useEffect(() => {
    if (!isOpen || isVideoPlaying) return
    const id = setInterval(() => setIndex((i) => (i + 1) % Math.max(images.length, 1)), 2500)
    return () => clearInterval(id)
  }, [isOpen, images.length, isVideoPlaying])

  // Lock background scroll when modal open
  useEffect(() => {
    if (isOpen) {
      const prev = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => { document.body.style.overflow = prev }
    }
  }, [isOpen])

  if (!isOpen || !project) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-auto">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop" onClick={onClose} />

      {/* Container 65% width */}
      <div className="relative w-2/3 max-w-5xl h-3/4 bg-black/85 rounded-md overflow-hidden shadow-xl animate-fade-in">
        {/* Gothic double border */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 border-2 border-gold-dark rounded-md" />
          <div className="absolute inset-2 border border-gold-dark rounded-md" />
        </div>

        {/* Close button */}
        <button type="button" className="absolute top-2 right-2 z-50 text-black bg-gold-dark hover:bg-[#c4a56f] hover:text-black text-2xl leading-none px-3 py-1 rounded-sm border border-gold-dark" onClick={onClose} aria-label="Close">×</button>

        <div className="relative h-full flex gap-6 p-6 items-start md:flex-row flex-col">
          {/* Left - Carousel (desktop), moved below on mobile */}
          <div className="flex-1 min-w-0 h-full bg-black/60 border border-gold-dark rounded-sm overflow-hidden flex flex-col md:order-1 order-2 w-full">
            <div className="min-h-0" style={{height: '68%'}}>
              {isVideo(images[index]) ? (
                <video
                  key={images[index]}
                  src={images[index]}
                  className="w-full h-full object-contain border border-gold-dark rounded-sm bg-black"
                  controls
                  playsInline
                  onPlay={() => setIsVideoPlaying(true)}
                  onPause={() => setIsVideoPlaying(false)}
                  onEnded={() => setIsVideoPlaying(false)}
                />
              ) : (
                <img src={images[index]} alt={project.name} className="w-full h-full object-contain border border-gold-dark rounded-sm" />
              )}
            </div>
            {/* Thumbnails strip */}
            <div className="p-2 h-16 flex gap-2 justify-center items-center bg-black/60 border-t border-gold-dark">
              {images.map((src, i) => (
                <button
                  key={i}
                  className={`w-12 h-12 border rounded-sm overflow-hidden ${i === index ? 'border-gold-dark' : 'border-stone-600/50'} bg-black`}
                  onClick={() => setIndex(i)}
                  aria-label={`Preview ${i + 1}`}
                >
                  {isVideo(src) ? (
                    <video 
                      src={src} 
                      className="w-full h-full object-contain" 
                      muted 
                      playsInline 
                      preload="metadata"
                      onLoadedData={(e) => {
                        // Set video to first frame and pause
                        e.currentTarget.currentTime = 0;
                        e.currentTarget.pause();
                      }}
                    />
                  ) : (
                    <img src={src} alt="thumb" className="w-full h-full object-contain" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Right - Details (top on mobile) */}
          <div className="flex-1 min-w-0 h-full flex flex-col justify-between md:order-2 order-1 w-full">
            <div className="space-y-4 min-w-0 h-full flex flex-col">
              <h2 className="font-[family-name:var(--font-unifraktur)] text-gold-dark text-2xl truncate" title={project.name}>{project.name}</h2>
              <div className="font-[family-name:var(--font-cinzel)] text-gold-dark leading-relaxed border border-gold-dark rounded-sm bg-black/60 p-3 max-h-56 md:max-h-64 overflow-y-auto pr-2 scrollbar-gothic">
                {project.modalDescription ?? project.description}
              </div>
            </div>

            <div className="mt-4 flex gap-3">
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noreferrer" className="font-[family-name:var(--font-cinzel)] text-gold-dark hover:text-[#c4a56f]">
                  GitHub
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noreferrer" className="font-[family-name:var(--font-cinzel)] text-gold-dark hover:text-[#c4a56f]">
                  Live
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
