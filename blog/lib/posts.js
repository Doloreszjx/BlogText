import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postDirectory = path.join(process.cwd(), "posts");

export function getSortedPostsData() {
  // 获取posts下的静态文件, 返回数组类型；
  const fileNames = fs.readdirSync(postDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // 遍历文件名，将文件名前缀做为id保存下来
    const id = fileName.replace(/\.md$/, "");

    // 以字符串形式读取静态文件内容
    const fullPath = path.join(postDirectory, fileName);
    const fullContent = fs.readFileSync(fullPath, "utf8");

    // 将文件内容转换为matter格式
    const matterResult = matter(fullContent);

    // 将文件id与文件内容合并
    return {
      id,
      ...matterResult.data,
    };
  });
  // 根据文件内容多少进行排序
  return allPostsData;
}
