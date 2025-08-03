import type Post from '@/types/Post';
import Header from "@/components/Header"
import PostList from "@/components/PostList";
import postList from "@/content/learning/posts/postsList.json"
import ArticleListTitleDescription from "@/components/ListingTitleDescription";

export default function Learning() {
  const learningPostList: Post[] = postList;

  return (
    <div>
      <Header breadcrumbObject={{ homepage: 'learning' }} />
      <ArticleListTitleDescription title="Learning" description="All the summaries about what I've learned throughout my journey" />

      <PostList posts={learningPostList} path="learning" />
    </div>
  )
}
