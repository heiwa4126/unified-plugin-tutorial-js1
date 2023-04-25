import process from "node:process";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import { stream } from "unified-stream";

const processor = unified().use(remarkParse).use(remarkRehype).use(rehypeStringify);

process.stdin.pipe(stream(processor)).pipe(process.stdout);
