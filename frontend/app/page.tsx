"use client"; // face pagina interactivă

import { useState } from "react";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");



  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Handle submit triggered");

    try {
      console.log("Test")
      const res = await fetch("http://localhost:8000/users/api/register/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (res.ok) {
        alert("User registered successfully!");
        window.location.href = "/login"; 

      } else {
        const data = await res.json();
        alert("Registration failed: " + data.detail || "Unknown error");
      }
      alert("Test")
    } catch (err) {
      console.error(err);
      alert("Error connecting to server");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded shadow">
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
      </form>
    </div>
  );
}


