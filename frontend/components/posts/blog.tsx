import PostList from './postlist';
import NewPost from './newpost';

export default function Blog({
  posts,
  onAddNewPost,
  onDeletePost,
  onLikePost,  // New prop for handling likes
}: {
  posts: any[];
  onAddNewPost: (post: any) => void;
  onDeletePost: (id: number) => void;
  onLikePost: (updatedPost: any) => void;  // New prop for handling likes
}) {
  return (
    <div className="flex flex-col gap-4 md:w-[53dvw] w-full">
      <NewPost onPostCreated={onAddNewPost} />
      <PostList posts={posts} onDeletePost={onDeletePost} onLikePost={onLikePost} />
    </div>
  );
}

