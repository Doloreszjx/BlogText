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

  return allPostsData;
}

// 由于每篇文章的路径都来自于获取的数据，因此将获取的多组数据，拆分后分别展示；
// 将文件前缀作为id保存在参数中
export function getAllPostsIds() {
  const fileNames = fs.readdirSync(postDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}
// 通过id获取各组数据
export function getAllPostsData(id) {
  const fullPath = path.join(postDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);

  return {
    id,
    ...matterResult.data,
  };
}
// // 获取动态数据
// export default async function getSortedPostsData() {
//   const res = await fetch(url);
//   return res.json();
// }
