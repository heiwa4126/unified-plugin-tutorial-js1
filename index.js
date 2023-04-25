import rehypeDocument from "rehype-document";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import remarkRetext from "remark-retext";
import remarkSlug from "remark-slug";
import remarkToc from "remark-toc";
import retextEnglish from "retext-english";
import retextIndefiniteArticle from "retext-indefinite-article";
import { unified } from "unified";
import { visit } from "unist-util-visit";
// import process from "node:process";
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
  .use(remarkRetext, unified().use(retextEnglish).use(retextIndefiniteArticle))
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

export default function retextSentenceSpacing() {
  return (tree, file) => {
    visit(tree, "ParagraphNode", (node) => {
      console.log(node);
    });
  };
}
