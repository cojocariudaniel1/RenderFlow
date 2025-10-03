"use client";

import { useState } from "react";
import { registerUser } from "@/controller/auth";
import { useRouter } from "next/navigation";
export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await registerUser(username, password);
      alert("User registered successfully!");
      window.location.href = "/login";
    } catch (err: any) {
      alert(err.message);
    }
  };
  const handleLoginRoute = () => {
    router.push("/login");
  };

  return (

    <div className="max-w-md mx-auto mt-20 p-6 bg-black rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Welcome to topikka</h1>
      <h1 className="text-2xl font-bold mb-4">Register</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Register
        </button>
        <button
          onClick={handleLoginRoute}
          className="mt-4 w-full bg-gray-200 text-gray-700 py-2 rounded hover:bg-gray-300"
        >
          Login instead
        </button>
      </form>
    </div>
  );
}
