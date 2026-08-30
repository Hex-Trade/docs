import { getDiscordCounts } from "@/lib/discord";

export async function GET() {
  return Response.json(await getDiscordCounts());
}
