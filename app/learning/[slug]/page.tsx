import Header from "@/components/Header"
import postList from '@/content/learning/posts/postsList.json'
import fs from 'fs';
import ReactMarkdown from "react-markdown";

export default async function LearningPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  const postObject = postList.find((post) => post.slug === slug);
  const postLink = `content/learning/posts/${slug}.md`;
  const fileContent = fs.readFileSync(postLink, 'utf-8');

  return (
    <div>
      <Header breadcrumbObject={{ homepage: 'learning', children: [{ label: postObject?.title }] }} />
      <div className="flex flex-col">
        <ReactMarkdown>{fileContent}</ReactMarkdown>
      </div>
    </div>
  )
}