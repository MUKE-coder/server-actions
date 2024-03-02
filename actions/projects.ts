"use server";

import { prismaClient } from "@/prisma/db";
import { Project } from "@/types/type";
import {revalidatePath} from 'next/cache'
export async function createNewProject(data: Project) {
  //Do data mutation here
  const newProject = await prismaClient.project.create({
    data,
  });
  console.log(newProject);
}
export async function getAllProjects() {
  //Do data mutation here
  const projects = await prismaClient.project.findMany();
  console.log(projects);
  revalidatePath("/");
  return projects;
}
