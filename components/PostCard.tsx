import Link from 'next/link'
import { Dot } from 'lucide-react';
import type Post from '@/types/Post'

export default function PostCard({
  post, isLast, path
}: {
  post: Post,
  isLast: boolean,
  path: string
}) {
  return (
    <Link className={`pb-3 ${isLast ? 'border-b mb-3' : ''}` }href={`/${path}/${post.slug}`} key={`${path}-post-${post.id}`}>
      <div className="flex flex-col gap-y-1 text-stone-700 dark:text-stone-300 hover:text-amber-700 dark:hover:text-amber-500 transition-all ease-in hover:translate-x-0.5">
        <div>
          <h3 className="font-semibold">{post.title}</h3>
        </div>
        <div>
          <p className="font-light">{post.description}</p>
        </div>
        <div className="flex flex-row items-center font-light text-sm">
          <span>{post.publishedOn}</span>
          <span><Dot size={22} /></span>
          <span>{post.readingTime} minutes</span>
        </div>
      </div>
    </Link>
  )
}