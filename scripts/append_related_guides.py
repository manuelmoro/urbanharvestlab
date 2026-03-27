import os
import glob
import re

blog_dir = '/home/mmoro/Documentos/urbanharvestlab/src/content/blog'

def get_frontmatter(content):
    match = re.search(r'^---\n(.*?)\n---', content, re.DOTALL)
    return match.group(1) if match else ""

def get_related_slugs(frontmatter):
    slugs = []
    in_related = False
    for line in frontmatter.split('\n'):
        if line.startswith('relatedSlugs:'):
            in_related = True
        elif in_related:
            if line.startswith('  - '):
                slugs.append(line.replace('  - ', '').strip().strip('"\''))
            elif not line.startswith(' '):
                in_related = False
    return slugs

def generate_related_section(slugs):
    if not slugs:
        return ""
    section = "\n\n## Related Guides\n\n"
    for s in slugs:
        # Generate a placeholder title from slug
        title = s.split('/')[-1].replace('-', ' ').title()
        section += f"- [{title}](/blog/{s}/)\n"
    return section

def main():
    files = glob.glob(os.path.join(blog_dir, '**/*.md'), recursive=True)
    count = 0
    for file in files:
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()

        # Check if already has related guides
        if '## Related Guides' in content or '## Related guides' in content:
            continue
            
        frontmatter = get_frontmatter(content)
        slugs = get_related_slugs(frontmatter)
        
        if not slugs:
            # Maybe try topicLinkSlugs
            in_topic = False
            for line in frontmatter.split('\n'):
                if line.startswith('topicLinkSlugs:'):
                    in_topic = True
                elif in_topic:
                    if line.startswith('  - '):
                        slugs.append(line.replace('  - ', '').strip().strip('"\''))
                    elif not line.startswith(' '):
                        in_topic = False

        if slugs:
            related_section = generate_related_section(slugs[:4]) # Max 4
            content = content.rstrip() + related_section + "\n"
            with open(file, 'w', encoding='utf-8') as f:
                f.write(content)
            count += 1
            print(f"Added Related Guides to {file}")

    print(f"Total modified: {count}")

if __name__ == "__main__":
    main()
