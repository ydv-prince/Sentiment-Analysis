const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000/predict";

export async function createNote(text) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ text })
  });

  if (!response.ok) {
    throw new Error(`API error (${response.status}): ${response.statusText}`);
  }

  return response.json();
}