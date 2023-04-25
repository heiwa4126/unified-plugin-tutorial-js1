// import process from "node:process";
import rehypeDocument from "rehype-document";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import remarkSlug from "remark-slug";
import remarkToc from "remark-toc";
import { unified } from "unified";
// import { stream } from "unified-stream";
import { readSync, writeSync } from "to-vfile";
import { reporter } from "vfile-reporter";

// 1.
// const processor = unified().use(remarkParse).use(remarkRehype).use(rehypeStringify);
// process.stdin.pipe(stream(processor)).pipe(process.stdout);

// 2.
// const processor = unified().use(remarkParse).use(remarkSlug).use(remarkToc).use(remarkRehype).use(rehypeDocument, { title: "Contents" }).use(rehypeStringify);
// process.stdin.pipe(stream(processor)).pipe(process.stdout);

const processor = unified()
  .use(remarkParse)
  .use(remarkSlug)
  .use(remarkToc)
  .use(remarkRehype)
  .use(rehypeDocument, { title: "Contents" })
  .use(rehypeStringify);

processor.process(readSync("example.md")).then(
  (file) => {
    console.error(reporter(file));
    file.extname = ".html";
    writeSync(file);
  },
  (error) => {
    throw error;
  }
);
