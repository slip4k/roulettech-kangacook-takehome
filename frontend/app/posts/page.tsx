'use client';
import { useState, useEffect } from 'react';
import Blog from '@/components/posts/blog';

import SideBar from '@/components/posts/sidebar';

interface Post {
  id: number;
  title: string;
  body: string;
  likes: number;
  created_at: string;
}

export default function Posts() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/posts/');
        if (response.ok) {
          const data = await response.json();
          setPosts(data);
        } else {
          console.error('Failed to fetch posts');
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  const addNewPost = (post: any) => {
    setPosts([post, ...posts]);
  };

  const handleDeletePost = (id: number) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  const handleLikePost = (updatedPost: any) => {
    setPosts(
      posts.map((post) => (post.id === updatedPost.id ? updatedPost : post))
    );
  };

  return (
    <div className="h-full flex flex-col items-center pb-4">
      <div className="flex flex-col md:flex-row justify-between gap-[2dvw]">
        <div className="order-2 md:order-1">
          <Blog
            posts={posts}
            onAddNewPost={addNewPost}
            onDeletePost={handleDeletePost}
            onLikePost={handleLikePost}
          />
        </div>
        <div className="order-1 md:order-2">
          <SideBar posts={posts} />
        </div>
      </div>
    </div>
  );
}
