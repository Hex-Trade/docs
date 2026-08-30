export async function getDiscordOnline() {
  try {
    const response = await fetch("https://discord.com/api/v10/invites/hextrade?with_counts=true", {
      next: { revalidate: 60 },
    });

    if (!response.ok) return 245;

    const data = (await response.json()) as {
      approximate_presence_count?: number;
      profile?: { online_count?: number };
    };

    return data.approximate_presence_count ?? data.profile?.online_count ?? 245;
  } catch {
    return 245;
  }
}
