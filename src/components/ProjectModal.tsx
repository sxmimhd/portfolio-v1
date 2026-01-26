import React, { useEffect, useMemo, useState } from 'react'
import { Project } from '../projectsData'

interface ProjectModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const images = useMemo(() => {
    if (!project) return []

    const media =
      project.media && project.media.length > 0
        ? project.media
        : project.image
        ? [project.image]
        : []

    return media.slice(0, 5)
  }, [project])

  const isVideo = (src: string) => /\.(mp4|webm|ogg)(\?.*)?$/i.test(src)

  const [index, setIndex] = useState(0)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [isUserInteracting, setIsUserInteracting] = useState(false)

  useEffect(() => {
    if (!isOpen || isVideoPlaying || isUserInteracting || images.length <= 1) return
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length)
    }, 2500)
    return () => clearInterval(id)
  }, [isOpen, images.length, isVideoPlaying, isUserInteracting])

  useEffect(() => {
    if (!isOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [isOpen])

  if (!isOpen || !project) return null

  return (
    <>
      {/* ================= MOBILE FULL PAGE ================= */}
      <div className="fixed inset-0 z-50 bg-black text-gold-dark md:hidden overflow-y-auto">
        <button
          onClick={onClose}
          className="fixed top-4 right-4 z-50 text-black bg-gold-dark text-2xl px-3 py-1 border border-gold-dark rounded-sm"
        >
          ×
        </button>

        <div className="p-4 space-y-4">
          <h2 className="font-[family-name:var(--font-cinzel-decorative)] text-xl">
            {project.name}
          </h2>

          <div className="font-[family-name:var(--font-cinzel)] leading-relaxed bg-black/60 border border-gold-dark rounded-sm p-3">
            {project.modalDescription ?? project.description}
          </div>

          <div className="aspect-video bg-black border border-gold-dark rounded-sm overflow-hidden">
            {isVideo(images[index]) ? (
              <video
                key={images[index]}
                src={images[index]}
                className="w-full h-full object-contain"
                controls
                playsInline
                onPlay={() => {
                  setIsVideoPlaying(true)
                  setIsUserInteracting(true)
                }}
                onPause={() => setIsVideoPlaying(false)}
                onEnded={() => setIsVideoPlaying(false)}
              />
            ) : (
              <img
                src={images[index]}
                alt={project.name}
                className="w-full h-full object-contain"
              />
            )}
          </div>

          <div className="flex gap-2 justify-center">
            {images.map((src, i) => (
              <button
                key={i}
                onClick={() => {
                  setIndex(i)
                  setIsUserInteracting(true)
                }}
                className={`w-12 h-12 border rounded-sm overflow-hidden ${
                  i === index ? 'border-gold-dark' : 'border-stone-600/50'
                } bg-black`}
              >
                {isVideo(src) ? (
                  <video src={src} muted className="w-full h-full object-contain" />
                ) : (
                  <img src={src} alt="thumb" className="w-full h-full object-contain" />
                )}
              </button>
            ))}
          </div>

          <div className="flex gap-4 pt-2 justify-center">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noreferrer">
                GitHub
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noreferrer">
                Live
              </a>
            )}
          </div>
        </div>
      </div>

      {/* ================= DESKTOP MODAL (UNCHANGED) ================= */}
      <div className="hidden md:flex fixed inset-0 z-50 items-center justify-center pointer-events-auto">
        <div className="absolute inset-0 bg-black/70 backdrop" onClick={onClose} />

        <div className="relative w-2/3 max-w-5xl h-3/4 bg-black/85 rounded-md overflow-hidden shadow-xl animate-fade-in">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 border-2 border-gold-dark rounded-md" />
            <div className="absolute inset-2 border border-gold-dark rounded-md" />
          </div>

          <button
            type="button"
            className="absolute top-2 right-2 z-50 text-black bg-gold-dark hover:bg-[#c4a56f] text-2xl px-3 py-1 rounded-sm border border-gold-dark"
            onClick={onClose}
          >
            ×
          </button>

          <div className="relative h-full flex gap-6 p-6 items-start">
            {/* LEFT */}
            <div className="flex-1 h-full bg-black/60 border border-gold-dark rounded-sm overflow-hidden flex flex-col">
              <div className="min-h-0" style={{ height: '68%' }}>
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
                  <img
                    src={images[index]}
                    alt={project.name}
                    className="w-full h-full object-contain border border-gold-dark rounded-sm"
                  />
                )}
              </div>

              <div className="p-2 h-16 flex gap-2 justify-center items-center bg-black/60 border-t border-gold-dark">
                {images.map((src, i) => (
                  <button
                    key={i}
                    className={`w-12 h-12 border rounded-sm overflow-hidden ${
                      i === index ? 'border-gold-dark' : 'border-stone-600/50'
                    } bg-black`}
                    onClick={() => {
                      setIndex(i)
                      setIsUserInteracting(true)
                    }}
                  >
                    {isVideo(src) ? (
                      <video src={src} muted className="w-full h-full object-contain" />
                    ) : (
                      <img src={src} alt="thumb" className="w-full h-full object-contain" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex-1 h-full flex flex-col justify-between">
              <div className="space-y-4 h-full flex flex-col">
                <h2 className="font-[family-name:var(--font-cinzel-decorative)] text-gold-dark text-2xl truncate">
                  {project.name}
                </h2>
                <div className="font-[family-name:var(--font-cinzel)] text-gold-dark leading-relaxed border border-gold-dark rounded-sm bg-black/60 p-3 max-h-64 overflow-y-auto scrollbar-gothic">
                  {project.modalDescription ?? project.description}
                </div>
              </div>

              <div className="mt-4 flex gap-3">
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                )}
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer">
                    Live
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
