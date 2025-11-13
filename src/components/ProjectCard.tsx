import React from 'react'
import { Project } from '../projectsData'

interface ProjectCardProps {
  project: Project
  onClick?: (project: Project) => void
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <button
      className="group w-full text-left bg-gold-muted border border-gold-dark rounded-sm overflow-hidden hover:border-gold-dark hover:bg-gold-dark/20 transition-colors duration-300 project-card flex flex-col"
      onClick={() => onClick?.(project)}
    >
      {/* Image (landscape ratio, contained) */}
      <div className="w-full aspect-16-9 bg-black flex items-center justify-center overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-2 flex-1 min-h-0 flex flex-col">
        <h3 className="font-[family-name:var(--font-cinzel-decorative)] text-xl text-gold-dark">
          {project.name}
        </h3>
        <div className="font-[family-name:var(--font-cinzel)] text-gold-dark text-sm leading-relaxed opacity-80 flex-1 min-h-0 overflow-y-auto pr-1">
          {project.cardDescription ?? project.description}
        </div>

        {/* Tech badges and links removed to prioritize description space */}
      </div>
    </button>
  )
}
