"use client";
import { ProjectSchema } from "@/schemas/schema";
import { type Project } from "@/types/type";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";

export default function ProjectForm() {
  // Add your react hookform
  //Add zod
  //Server action || API Routes

  function handleFormSubmit(data: Project) {
    console.log(data);

    //API ROUTE

    //SERVER ACTION
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Project>({
    resolver: zodResolver(ProjectSchema),
  });
  return (
    <form className="space-y-6" onSubmit={handleSubmit(handleFormSubmit)}>
      <h5 className="text-xl font-medium text-gray-900 dark:text-white">
        Create New Project
      </h5>
      <div>
        <label
          htmlFor="title"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Title
        </label>
        <input
          {...register("title")}
          type="text"
          name="title"
          id="title"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          placeholder="project name"
        />
        {errors.title && (
          <p className="text-red-500 text-sm mt-2">{errors.title.message}</p>
        )}
      </div>
      <div>
        <label
          htmlFor="description"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Project Description
        </label>
        <textarea
          {...register("description")}
          id="description"
          rows={4}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write your thoughts here..."
        ></textarea>
        {errors.description && (
          <p className="text-red-500 text-sm mt-2">
            {errors.description.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Create Project
      </button>
    </form>
  );
}
