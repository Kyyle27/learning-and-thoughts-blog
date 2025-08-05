import fs from 'fs';
import type Post from '@/types/Post';
import Header from "@/components/Header"
import ReactMarkdown from "react-markdown";
import ErrorState from '@/components/ErrorState';
import postList from '@/content/blog/posts/postsList.json'

const getFileContent = (postLink: string): string | null => {
  if (fs.existsSync(postLink)) {
    const fileContent: string = fs.readFileSync(postLink, 'utf-8');

    return fileContent;
  }
  return null;
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const posts: Post[] = postList;
  const { slug }: { slug: string } = await params;
  const postObject: Post | undefined = posts.find((post: Post) => post.slug === slug) || {
    id: 0,
    title: "",
    description: "",
    slug: slug,
    publishedOn: "",
    readingTime: 0,
    tag: ""
  };
  const postLink: string = `content/blog/posts/${slug}.md`;
  const fileContent: string | null = getFileContent(postLink);

  return (
    <div>
      <Header breadcrumbObject={{ homepage: 'blog', children: postObject && postObject?.title ? [{ title: postObject.title || '' }] : undefined }} />

      <div className="flex flex-col markdown-content">
        {fileContent ? <ReactMarkdown>{fileContent}</ReactMarkdown> : <ErrorState />}
      </div>
    </div>
  )
}

export function generateStaticParams() {
  const posts: Post[] = postList;
  const arrayToReturn: { slug: string }[] = posts.map((post: Post) => { return { slug: post.slug } });

  return arrayToReturn;
}

export const dynamicParams: boolean = false