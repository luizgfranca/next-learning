import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export function getSortedPostsData() {
  const files = fs.readdirSync(postsDirectory);

  const postsData = files.map((f) => {
    const id = f.replace(".md", "");
    const content = fs.readFileSync(path.join(postsDirectory, f), "utf-8");
    const processed = matter(content);
    return {
      id,
      ...processed.data,
    };
  });

  return postsData.sort(({ date: a }, { date: b }) => {
    if (a < b) return 1;
    else if (a > b) return -1;
    else return 0;
  });
}
