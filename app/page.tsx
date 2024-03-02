import { getAllProjects } from "@/actions/projects";
import ProjectCard from "@/components/ProjectCard";
import RegisterForm from "@/components/RegisterForm";
import Link from "next/link";
import React from "react";

export default async function Home() {
  const projects = await getAllProjects();
  return (
    <div className="px-16 py-16 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <h2 className="text-2xl py-6 font-bold text-center">My Projects</h2>
        <Link
          className="py-3 px-6 bg-teal-600 text-white rounded"
          href="/dashboard/projects"
        >
          Create Project
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4">
        {projects.map((project, i) => {
          return (
            <ProjectCard
              title={project.title}
              description={project.description}
              key={i}
            />
          );
        })}
      </div>
    </div>
  );
}
