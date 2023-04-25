import process from "node:process";
import rehypeDocument from "rehype-document";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import remarkSlug from "remark-slug";
import remarkToc from "remark-toc";
import { unified } from "unified";
import { stream } from "unified-stream";

// const processor = unified().use(remarkParse).use(remarkRehype).use(rehypeStringify);

const processor = unified().use(remarkParse).use(remarkSlug).use(remarkToc).use(remarkRehype).use(rehypeDocument, { title: "Contents" }).use(rehypeStringify);

process.stdin.pipe(stream(processor)).pipe(process.stdout);
