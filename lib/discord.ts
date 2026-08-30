export type DiscordCounts = {
  online: number;
  members: number;
};

const fallback: DiscordCounts = { online: 245, members: 500 };

export async function getDiscordCounts(): Promise<DiscordCounts> {
  try {
    const response = await fetch("https://discord.com/api/v10/invites/hextrade?with_counts=true", {
      next: { revalidate: 60 },
    });

    if (!response.ok) return fallback;

    const data = (await response.json()) as {
      approximate_presence_count?: number;
      approximate_member_count?: number;
      profile?: { online_count?: number; member_count?: number };
    };

    return {
      online: data.approximate_presence_count ?? data.profile?.online_count ?? fallback.online,
      members: data.approximate_member_count ?? data.profile?.member_count ?? fallback.members,
    };
  } catch {
    return fallback;
  }
}

export async function getDiscordOnline() {
  return (await getDiscordCounts()).online;
}
