import type Post from '@/types/Post';
import PostCard from '@/components/PostCard';
import EmptyState from "@/components/EmptyState";

export default function PostList({
  posts, path
}: {
  posts: Post[],
  path: string
}) {
  return (
    <div className="flex flex-col">
      {posts.map((post: Post, index: number) => (
        <PostCard
          post={post}
          isLast={index !== posts?.length - 1}
          key={`${path}-post-${post.id}`}
          path={path}
        />
      ))}
      {posts.length === 0 && (
        <EmptyState />
      )}
    </div>
  )
}