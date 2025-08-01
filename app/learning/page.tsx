import Link from 'next/link'
import Header from "@/components/Header"
import postList from '@/content/learning/posts/postsList.json'
import { Dot } from 'lucide-react';

export default function Learning() {
  const reversedPostList = postList.reverse();
  return (
    <div>
      <Header breadcrumbObject={{ homepage: 'learning' }} />
      <div className="mb-2">
        Learning homepage
      </div>
      <div className="flex flex-col">
        {reversedPostList.map((post, index) => (
          <Link className={`pb-3 ${index !== postList?.length - 1 ? 'border-b mb-3' : ''}` }href={`/learning/${post.slug}`} key={`learning-post-${post.id}`}>
            <div className="flex flex-col gap-y-1">
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
        ))}
      </div>
    </div>
  )
}