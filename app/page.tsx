import ProjectCard from "@/components/ProjectCard";
import RegisterForm from "@/components/RegisterForm";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div className="px-16 py-16 bg-slate-50 min-h-screen">
      <h2 className="text-2xl py-6 font-bold text-center">My Projects</h2>

      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}
