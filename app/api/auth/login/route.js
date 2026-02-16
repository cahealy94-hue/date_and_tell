const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://vopnqpulwbofvbyztcta.supabase.co";

export async function POST(request) {
  const { email, password } = await request.json();

  if (!email || !password) {
    return Response.json({ error: "Email and password required" }, { status: 400 });
  }

  const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  // Sign in via Supabase Auth REST API
  const res = await fetch(`${SUPABASE_URL}/auth/v1/token?grant_type=password`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: SUPABASE_ANON_KEY,
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();

  if (!res.ok) {
    return Response.json({ error: data.error_description || data.msg || "Login failed" }, { status: res.status });
  }

  return Response.json({
    ok: true,
    user: data.user,
    access_token: data.access_token,
    refresh_token: data.refresh_token,
    expires_in: data.expires_in,
  });
}
