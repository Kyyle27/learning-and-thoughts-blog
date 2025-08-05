import type Post from "@/types/Post"
import ReactMarkdown from "react-markdown";
import ErrorState from '@/components/ErrorState';

interface PostContentParams {
  postObject: Post
  fileContent: string | null
}

export default function PostContent({postObject, fileContent}: PostContentParams) {
    return (
      <div>
        <h1 className="text-3xl font-bold mb-1">{postObject?.title}</h1>
        <span className="text-md font-light font-stone-300">{postObject?.publishedOn}</span>
        <div className="flex flex-col markdown-content">
          {fileContent ? <ReactMarkdown>{fileContent}</ReactMarkdown> : <ErrorState />}
        </div>
      </div>
    )
}