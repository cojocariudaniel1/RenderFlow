
export async function registerUser(username: string, password: string) {
  const res = await fetch("http://localhost:8000/users/api/register/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  if (!res.ok) {
    const data = await res.json();
    throw new Error(data.detail || "Registration failed");
  }

  return res.json();
}


export async function loginUser(username: string, password: string) {
  const res = await fetch("http://localhost:8000/users/api/login/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  if (!res.ok) {
    const data = await res.json();
    throw new Error(data.detail || "Registration failed");
  }

  return res.json();
}


