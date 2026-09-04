const API_BASE =
  import.meta.env.VITE_API_URL ??
  (import.meta.env.DEV ? "" : "https://api-production-7c27.up.railway.app");

export async function sendLead(payload: {
  name: string;
  message: string;
}): Promise<void> {
  const response = await fetch(`${API_BASE}/api/leads`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Failed to send lead");
  }
}
