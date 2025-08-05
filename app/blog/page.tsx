import type Post from '@/types/Post';
import Header from "@/components/Header"
import PostList from "@/components/PostList";
import postList from '@/content/blog/posts/postsList.json'
import ArticleListTitleDescription from "@/components/ListingTitleDescription";

export default function Blog() {
  const blogPostList: Post[] = postList;

  return (
    <div>
      <Header breadcrumbObject={{ homepage: 'blog' }} />

      <ArticleListTitleDescription title="Blog" description="All the articles I've written on development, technologies and my thoughts." />

      <PostList posts={blogPostList} path="blog" />
    </div>
  )
}