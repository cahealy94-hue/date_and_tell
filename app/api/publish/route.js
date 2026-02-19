const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://vopnqpulwbofvbyztcta.supabase.co";
export async function GET(request) {
  // Verify this is called by Vercel Cron (or manually with auth)
  const authHeader = request.headers.get("authorization");
  const cronSecret = process.env.CRON_SECRET;
  if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }
  const serviceKey = process.env.SUPABASE_SERVICE_KEY;
  // Publish all queued stories
  const res = await fetch(
    `${SUPABASE_URL}/rest/v1/stories?status=eq.queued`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        apikey: serviceKey,
        Authorization: `Bearer ${serviceKey}`,
        Prefer: "return=representation",
      },
      body: JSON.stringify({
        status: "published",
        published_at: new Date().toISOString(),
      }),
    }
  );
  const published = await res.json();
  const count = Array.isArray(published) ? published.length : 0;
  return Response.json({
    ok: true,
    message: `Published ${count} stories`,
    published_at: new Date().toISOString(),
  });
}
