// app/api/session/route.ts
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authIOptions";

export async function GET() {
  const session = await getServerSession(authOptions);
  return new Response(JSON.stringify({ session }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
