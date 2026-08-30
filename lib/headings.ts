export type Heading = {
  id: string;
  title: string;
  level: 2 | 3;
};

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[`*_~]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export function extractHeadings(markdown: string): Heading[] {
  const headings: Heading[] = [];

  for (const line of markdown.split("\n")) {
    const match = /^(#{2,3})\s+(.+)$/.exec(line.trim());
    if (!match) continue;

    const level = match[1].length as 2 | 3;
    const title = match[2].replace(/[*_`]/g, "").trim();
    headings.push({ id: slugify(title), title, level });
  }

  return headings;
}
