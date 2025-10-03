"use client"; // necesar pentru componenta client-side în Next.js 13+

import { useState } from "react";
import { loginUser } from "@/controller/auth";
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const data = await loginUser(username, password);
      alert("Logged in as " + data.username);
    } catch (err: any) {
      alert("Login failed: " + err.message);
    }
  };


  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem", width: "300px" }}>
        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          style={{ padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc" }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc" }}
        />
        <button type="submit" style={{ padding: "0.5rem", borderRadius: "4px", backgroundColor: "#0070f3", color: "white", border: "none" }}>
          Login
        </button>
      </form>
    </div>
  );
}
