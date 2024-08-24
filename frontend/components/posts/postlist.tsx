'use client';
import PostPreview from './postpreview';

interface PostListProps {
  posts: any[];
  onDeletePost: (id: number) => void;
  onLikePost: (updatedPost: any) => void;
}

export default function PostList({
  posts,
  onDeletePost,
  onLikePost,
}: PostListProps) {
  return (
    <div className="flex flex-col gap-4">
      {posts.map((post) => (
        <PostPreview
          key={post.id}
          post={post}
          onDelete={onDeletePost}
          onLike={onLikePost}
        />
      ))}
    </div>
  );
}
