import fs from 'fs';
import type Post from '@/types/Post';
import Header from "@/components/Header"
import ReactMarkdown from "react-markdown";
import ErrorState from '@/components/ErrorState';
import postList from '@/content/blog/posts/postsList.json'

const getFileContent = (postLink: string) => {
  if (fs.existsSync(postLink)) {
    const fileContent = fs.readFileSync(postLink, "utf-8");

    return fileContent;
  }
  return null;
}

export default async function LearningPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  const postObject = postList.find((post: Post) => post.slug === slug);
  const postLink = `content/learning/posts/${slug}.md`;
  const fileContent = getFileContent(postLink);

  return (
    <div>
      <Header breadcrumbObject={{ homepage: "learning", children: [{ title: postObject?.title || '' }] }} />
      <div className="flex flex-col markdown-content">
        {fileContent ? <ReactMarkdown>{fileContent}</ReactMarkdown> : <ErrorState />}
      </div>
    </div>
  )
}

export function generateStaticParams() {
  const arrayToReturn = postList.map((post) => { return { slug: post.slug } });

  return arrayToReturn;
}

export const dynamicParams = false