'use client';

import { useState } from 'react';
import { Heart, Trash2 } from 'lucide-react';

interface Post {
  id: number;
  title: string;
  body: string;
  likes: number;
  created_at: string;
}

interface PostPreviewProps {
  post: Post;
  onDelete: (id: number) => void;
  onLike: (updatedPost: Post) => void; 
}

export default function PostPreview({
  post: initialPost,
  onDelete,
  onLike,
}: PostPreviewProps) {
  const [post, setPost] = useState<Post>(initialPost);

  const handleLike = async () => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/posts/${post.id}/like/`,
        {
          method: 'POST',
        }
      );
      if (response.ok) {
        const updatedPost = await response.json();
        setPost(updatedPost);
        onLike(updatedPost); 
      } else {
        console.error('Failed to like the post');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/posts/${post.id}/`,
        {
          method: 'DELETE',
        }
      );
      if (response.ok) {
        onDelete(post.id); 
        console.log('Post deleted successfully');
      } else {
        console.error('Failed to delete the post');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const formattedDate = new Date(post.created_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div className="flex flex-col gap-2 border border-gray-300 rounded-md drop-shadow-sm p-4 bg-white">
      <p className="flex justify-between font-bold text-xl">
        {post.title}
        <button onClick={handleDelete}>
          <Trash2 className="cursor-pointer text-red-500" />
        </button>
      </p>
      <p className="text-xs">{formattedDate}</p>
      <p className="whitespace-pre-wrap">{post.body}</p>
      <p className="flex gap-2 items-center">
        <button onClick={handleLike}>
          <Heart className="cursor-pointer" />
        </button>
        {post.likes}
      </p>
    </div>
  );
}
