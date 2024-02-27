"use client";
import Admin from "@/components/Admin";
import Button from "@/components/Button";
import CustomButton from "@/components/CustomButton";
import Employee from "@/components/Employee";
import Product from "@/components/Product";
import Products from "@/components/Products";
import ProductsContainer from "@/components/ProductsContainer";
import { EmployeeProps } from "@/types/types";
import { Loader, Mail } from "lucide-react";
import Link from "next/link";
import { FormEvent, useRef, useState } from "react";

export default function Home() {
  //By DEFAULT the type of useState is inferred
  const [loading, setLoading] = useState<boolean>(true);
  type Status = "idle" | "loading" | "success" | "error";

  const [status, setStatus] = useState<Status>("idle");
  const [user, setUser] = useState<EmployeeProps | null>(null);
  // REFS
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const departmentRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  // FORM SUBMISSION
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const name = nameRef.current?.value;
    const email = emailRef.current?.value;
    const department = departmentRef.current?.value;
    const id = Math.floor(Math.random() * 100);
    if (name && email && department && id) {
      const newUser: EmployeeProps = {
        id,
        name,
        email,
        department,
      };
      setUser(newUser);
    }
  }

  return (
    <section className="min-h-screen max-7xl mx-auto py-16 bg-slate-950 text-slate-200">
      <div className=" flex items-center justify-center  flex-col">
        <h2 className="text-5xl">Advanced TypeScript for Next.js Developers</h2>
        <div className="">
          <h3 className="text-3xl pt-8">Most Used Concepts in Next Js </h3>
          <ul className="py-2 list-disc">
            <li>Component Props</li>
            <li>Types for Dynamic Routes</li>
            <li>Re-Usable Types</li>
            <li>UseSate</li>
            <li>Refs and Events Types</li>
            <li>Element Wrapper</li>
            <li>Creating advanced Custom Button Element</li>
          </ul>
        </div>
        <div className="py-8">
          <Button title="Add to Cart" loading={loading} />
        </div>
        <Products />
        <ProductsContainer>
          <div className="flex justify-between items-center py-6">
            <h2 className="text-3xl">Popular Products</h2>
            <Link
              className="bg-slate-200 text-slate-800 text-xl py-2.5 px-6 rounded-md"
              href="#"
            >
              See All
            </Link>
          </div>
          <Products />
        </ProductsContainer>
        <ProductsContainer>
          <section className="py-8">
            <h2>Welcome to New Section</h2>
          </section>
          <div className="py-4">
            <Admin adminNo={123445} name="Waswa Deo" email="admin@admin.com" />
          </div>
          <div className="py-4">
            {user && (
              <Employee
                department={user?.department}
                id={user?.id}
                name={user?.name}
                email={user?.email}
              />
            )}
          </div>
        </ProductsContainer>
        <ProductsContainer>
          <form
            onSubmit={handleSubmit}
            ref={formRef}
            className="flex flex-col gap-4 mx-auto max-w-3xl"
          >
            <input
              className="p-3 text-slate-900"
              type="text"
              placeholder="name"
              ref={nameRef}
            />
            <input
              className="p-3 text-slate-900"
              type="email"
              placeholder="email"
              ref={emailRef}
            />
            <input
              className="p-3 text-slate-900"
              type="text"
              placeholder="department"
              ref={departmentRef}
            />
            <button className="bg-blue-500 text-white py-3 px-6 rounded">
              Create User
            </button>
          </form>
        </ProductsContainer>
        <ProductsContainer>
          <div className="py-8 flex gap-4">
            <CustomButton
              href="/products/1"
              icon={<Mail />}
              title="Download"
              className="bg-lime-400 text-slate-900 py-3 px-6"
            />
            <CustomButton
              variant="primary"
              title="Loading"
              icon={<Loader className="animate-spin" />}
            />
            <CustomButton
              onClick={() => alert("Its working")}
              title="Get Started"
              variant="secondary"
            />
          </div>
        </ProductsContainer>
      </div>
    </section>
  );
}
