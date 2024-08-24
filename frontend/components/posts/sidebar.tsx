'use client';

import { Heart } from 'lucide-react';

interface Post {
  id: number;
  title: string;
  likes: number;
}

export default function SideBar({ posts }: { posts: Post[] }) {
  const topPosts = [...posts]
    .sort((a, b) => b.likes - a.likes) 
    .slice(0, 5); 

  return (
    <div className="flex flex-col gap-2 border border-gray-300 rounded-md drop-shadow-sm p-4 w-full md:w-[24dvw] bg-white">
      <p className="font-bold text-lg">Highlighted Posts</p>
      {topPosts.map((post) => (
        <div
          key={post.id}
          className="flex justify-between w-full border border-gray-400 rounded-md drop-shadow-sm p-4"
        >
          <p className="font-semibold text-md">{post.title}</p>
          <p className="flex gap-2">
            <Heart /> {post.likes}
          </p>
        </div>
      ))}
    </div>
  );
}
