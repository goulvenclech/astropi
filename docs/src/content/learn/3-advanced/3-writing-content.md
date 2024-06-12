---
slug: "advanced/writing-content"
title: "Writing content"
---

By default, Astropi uses markdown files to create content, here is the supported syntax:

## Frontmatter

Frontmatter is a block of YAML or JSON at the beginning of a file that is used to define metadata. In Astropi, frontmatter is used to define the title, date, abstract, and other metadata of a content.

Here is an example of frontmatter:

```md
---
title: "Hello world!"
date: 2024-04-30
abstract: "This is an example of a blog post."
---
```

## Headers

Note that the level 1 title is automatically added to the page title and the navigation.

```md
## Level 2 title
### Level 3 title
```

## Text

```md
This is a paragraph.

This is another paragraph.
```

## Emphasis

```md
*italic*
**bold**
```

## Lists

```md
- Item 1
- Item 2
  - Subitem 1
  - Subitem 2
```

## Links

```md
[Link text](https://example.com)
```

## Images

```md
![Alt text](https://example.com/image.jpg)
```

## Code

```md
`inline code`
```

## Code block

```md
\`\`\`ts
const example = "code block";
\`\`\`
```

## Blockquote

```md
> This is a blockquote.
```

## Horizontal rule

```md
---
```

## Line break

```md
This is a line
This is a line break.
```

## Tables

```md
| Header 1 | Header 2 |
| -------- | -------- |
| Cell 1   | Cell 2   |
```
