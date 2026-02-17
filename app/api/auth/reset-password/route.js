const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://vopnqpulwbofvbyztcta.supabase.co";

export async function POST(request) {
  const { accessToken, newPassword } = await request.json();

  if (!accessToken || !newPassword) {
    return Response.json({ error: "Token and new password are required" }, { status: 400 });
  }

  if (newPassword.length < 6) {
    return Response.json({ error: "Password must be at least 6 characters" }, { status: 400 });
  }

  const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  // Update password using the recovery access token
  const res = await fetch(`${SUPABASE_URL}/auth/v1/user`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ password: newPassword }),
  });

  const data = await res.json();

  if (!res.ok) {
    console.error("Password update error:", data);
    return Response.json({ error: data.error_description || data.msg || "Failed to update password" }, { status: res.status });
  }

  return Response.json({ ok: true, user: data });
}
