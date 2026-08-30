import { getDiscordOnline } from "@/lib/discord";

export async function GET() {
  const online = await getDiscordOnline();
  return Response.json({ online });
}
