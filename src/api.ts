const API_BASE =
  import.meta.env.VITE_API_URL ??
  (import.meta.env.DEV ? "" : "https://api-production-7c27.up.railway.app");

export type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

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

export async function sendChat(messages: ChatMessage[]): Promise<ChatMessage> {
  let response: Response;
  try {
    response = await fetch(`${API_BASE}/api/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages }),
    });
  } catch {
    throw new Error("Cannot reach the server. Check your connection and try again.");
  }

  const data = (await response.json().catch(() => null)) as
    | { message?: ChatMessage; error?: string }
    | null;

  if (!response.ok) {
    throw new Error(data?.error || "Failed to get AI reply");
  }

  if (!data?.message?.content) {
    throw new Error("Empty AI reply");
  }

  return data.message;
}
