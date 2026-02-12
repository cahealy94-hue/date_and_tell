export async function POST(request) {
  const { password } = await request.json();
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminPassword || password !== adminPassword) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  return Response.json({ ok: true });
}
