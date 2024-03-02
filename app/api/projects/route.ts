import { prismaClient } from "@/prisma/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { title, description } = await request.json();
    const newProject = await prismaClient.project.create({
      data: {
        title,
        description,
      },
    });
    console.log(newProject);
    return NextResponse.json(newProject);
  } catch (error) {
    console.log(error);
  }
}
