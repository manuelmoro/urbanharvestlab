interface Heading {
  depth: number;
  slug: string;
  text: string;
}

export function assertArticleHeadingStructure(headings: Heading[], articleSlug: string) {
  if (!headings.some((heading) => heading.depth === 2)) {
    throw new Error(`Article "${articleSlug}" must include at least one H2 heading in the content body.`);
  }

  let previousDepth = 1;

  for (const heading of headings) {
    if (heading.depth === 1) {
      throw new Error(`Article "${articleSlug}" includes an H1 in markdown. The page layout already renders the only H1.`);
    }

    if (heading.depth < 2 || heading.depth > 3) {
      throw new Error(`Article "${articleSlug}" uses an H${heading.depth}. Only H2 and H3 headings are allowed in article content.`);
    }

    if (heading.depth - previousDepth > 1) {
      throw new Error(
        `Article "${articleSlug}" skips a heading level before "${heading.text}". Move from H${previousDepth} to H${heading.depth} in order.`,
      );
    }

    previousDepth = heading.depth;
  }
}
